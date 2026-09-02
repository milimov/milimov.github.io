import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js";

const visual = document.querySelector(".hero-visual");
const canvasMount = document.querySelector(".three-canvas");
const casePoints = [...document.querySelectorAll(".case-point")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (visual && canvasMount) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 20);
  camera.position.z = 4.6;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  canvasMount.appendChild(renderer.domElement);

  const isCompact = window.matchMedia("(max-width: 700px)").matches;
  const particleCount = isCompact ? 360 : 2700;
  const radius = 1.5;
  const basePositions = new Float32Array(particleCount * 3);
  const positions = new Float32Array(particleCount * 3);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let index = 0; index < particleCount; index += 1) {
    const y = 1 - (index / (particleCount - 1)) * 2;
    const ringRadius = Math.sqrt(1 - y * y);
    const angle = goldenAngle * index;
    const offset = index * 3;
    basePositions[offset] = Math.cos(angle) * ringRadius * radius;
    basePositions[offset + 1] = y * radius;
    basePositions[offset + 2] = Math.sin(angle) * ringRadius * radius;
  }
  positions.set(basePositions);

  const activePointIndices = new Set(
    casePoints.map((link) =>
      Math.round((Number(link.dataset.point) / 699) * (particleCount - 1)),
    ),
  );

  const geometry = new THREE.BufferGeometry();
  const positionAttribute = new THREE.BufferAttribute(positions, 3);
  positionAttribute.setUsage(THREE.DynamicDrawUsage);
  geometry.setAttribute("position", positionAttribute);

  const material = new THREE.PointsMaterial({
    color: 0x008b92,
    size: isCompact ? 0.026 : 0.022,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.74,
    depthWrite: false,
  });

  const sphere = new THREE.Points(geometry, material);
  sphere.rotation.x = -0.12;
  scene.add(sphere);

  const pointer = new THREE.Vector2(4, 4);
  const pointerTarget = new THREE.Vector2();
  const projected = new THREE.Vector3();
  const localPoint = new THREE.Vector3();
  const worldPoint = new THREE.Vector3();
  let pointerInside = false;
  let isDragging = false;
  let lastPointerX = 0;
  let lastPointerY = 0;
  let manualRotationX = -0.18;
  let manualRotationY = 1;
  let automaticRotation = 0;
  let frameId;

  function resize() {
    const { width, height } = visual.getBoundingClientRect();
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function updatePointer(event) {
    const rect = visual.getBoundingClientRect();
    pointerInside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    if (!pointerInside) return;
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    pointerTarget.set(pointer.x, pointer.y);
  }

  function startDrag(event) {
    if (event.target.closest(".case-point")) return;
    isDragging = true;
    lastPointerX = event.clientX;
    lastPointerY = event.clientY;
    visual.classList.add("is-dragging");
    visual.setPointerCapture(event.pointerId);
  }

  function dragSphere(event) {
    updatePointer(event);
    if (!isDragging) return;
    const deltaX = event.clientX - lastPointerX;
    const deltaY = event.clientY - lastPointerY;
    manualRotationY += deltaX * 0.006;
    manualRotationX = THREE.MathUtils.clamp(
      manualRotationX + deltaY * 0.006,
      -1.15,
      1.15,
    );
    lastPointerX = event.clientX;
    lastPointerY = event.clientY;
  }

  function stopDrag(event) {
    if (!isDragging) return;
    isDragging = false;
    visual.classList.remove("is-dragging");
    if (visual.hasPointerCapture(event.pointerId)) {
      visual.releasePointerCapture(event.pointerId);
    }
  }

  function updateParticles() {
    const interactionRadius = 0.22;

    for (let index = 0; index < particleCount; index += 1) {
      if (activePointIndices.has(index)) continue;

      const offset = index * 3;
      positions[offset] += (basePositions[offset] - positions[offset]) * 0.075;
      positions[offset + 1] +=
        (basePositions[offset + 1] - positions[offset + 1]) * 0.075;
      positions[offset + 2] +=
        (basePositions[offset + 2] - positions[offset + 2]) * 0.075;

      if (!pointerInside || isDragging) continue;

      localPoint.set(
        positions[offset],
        positions[offset + 1],
        positions[offset + 2],
      );
      projected
        .copy(localPoint)
        .applyMatrix4(sphere.matrixWorld)
        .project(camera);

      const deltaX = projected.x - pointer.x;
      const deltaY = projected.y - pointer.y;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance > 0 && distance < interactionRadius) {
        const force = Math.pow(1 - distance / interactionRadius, 2) * 0.055;
        positions[offset] += (deltaX / distance) * force;
        positions[offset + 1] += (deltaY / distance) * force;
        positions[offset + 2] += force * 0.3;
      }
    }

    positionAttribute.needsUpdate = true;
  }

  function updateCasePoints() {
    casePoints.forEach((link) => {
      const requestedIndex = Number(link.dataset.point);
      const index = Math.round((requestedIndex / 699) * (particleCount - 1));
      const offset = index * 3;
      localPoint.set(
        positions[offset],
        positions[offset + 1],
        positions[offset + 2],
      );
      worldPoint.copy(localPoint).applyMatrix4(sphere.matrixWorld);
      projected.copy(worldPoint).project(camera);
      const visible =
        worldPoint.z > 0.05 && projected.z < 1 && projected.z > -1;
      link.style.left = `${(projected.x * 0.5 + 0.5) * 100}%`;
      link.style.top = `${(-projected.y * 0.5 + 0.5) * 100}%`;
      link.style.opacity = visible ? "1" : "0";
      link.style.pointerEvents = visible ? "auto" : "none";
    });
  }

  function render() {
    automaticRotation += 0.00015;
    const hoverX = isDragging ? 0 : -pointerTarget.y * 0.015;
    const hoverY = isDragging ? 0 : pointerTarget.x * 0.02;
    sphere.rotation.y +=
      (manualRotationY + automaticRotation + hoverY - sphere.rotation.y) * 0.08;
    sphere.rotation.x += (manualRotationX + hoverX - sphere.rotation.x) * 0.08;
    sphere.updateMatrixWorld();
    updateParticles();
    updateCasePoints();
    renderer.render(scene, camera);
    frameId = requestAnimationFrame(render);
  }

  function start() {
    cancelAnimationFrame(frameId);
    resize();
    if (reducedMotion.matches) {
      sphere.updateMatrixWorld();
      updateCasePoints();
      renderer.render(scene, camera);
      return;
    }
    render();
  }

  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pointermove", updatePointer, { passive: true });
  visual.addEventListener("pointerdown", startDrag);
  visual.addEventListener("pointermove", dragSphere);
  visual.addEventListener("pointerup", stopDrag);
  visual.addEventListener("pointercancel", stopDrag);
  document.addEventListener("pointerleave", () => {
    pointerInside = false;
    pointerTarget.set(0, 0);
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(frameId);
    else start();
  });
  reducedMotion.addEventListener("change", start);
  casePoints.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const destination = link.href;
      const newTab = window.open("about:blank", "_blank");
      link.classList.remove("is-activated");
      void link.offsetWidth;
      link.classList.add("is-activated");
      window.setTimeout(() => {
        link.classList.remove("is-activated");
        if (newTab) {
          newTab.opener = null;
          newTab.location.href = destination;
        } else {
          window.location.href = destination;
        }
      }, 280);
    });
  });
  start();
}
