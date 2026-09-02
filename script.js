const translations = [
  [".site-nav > a[href='#profile']", "Профиль", "Profile"],
  [".site-nav > a[href='#experience']", "Опыт", "Experience"],
  [".site-nav > a[href='#skills']", "Навыки", "Skills"],
  [".nav-contact", "Связаться", "Contact"],
  [
    "#hero-title",
    "Алексей<br><span>Милимов</span>",
    "Alex<br><span>Milimov</span>",
    true,
  ],
  [
    ".hero-lead",
    "Создаю рекламные и имиджевые ролики, объединяя 2D-анимацию, 3D-графику и AI-инструменты.",
    "I create advertising and brand films that combine 2D animation, 3D graphics and AI tools.",
  ],
  [".hero-actions .button-primary", "Портфолио", "Portfolio"],
  [".hero-actions .button-secondary", "Смотреть опыт", "View experience"],
  [".case-point:nth-of-type(1) span", "Альфа Банк", "Alpha Bank"],
  [".case-point:nth-of-type(2) span", "ГАЗ", "GAZ"],
  [".case-point:nth-of-type(3) span", "Стэфорд", "Steford"],
  [".case-point:nth-of-type(4) span", "НовыеДома", "NovieDoma"],
  [".case-point:nth-of-type(5) span", "СушиБокс", "SushiBox"],
  [".case-point:nth-of-type(6) span", "Бэд Планет", "Bad Planet"],
  [".case-point:nth-of-type(7) span", "3D иконки", "3D icons"],
  [".case-point:nth-of-type(8) span", "Космо робот", "Cosmo Robot"],
  [".case-point:nth-of-type(9) span", "Космо медведь", "Cosmo bear"],
  [".hero-meta > div:nth-child(1) span", "лет в дизайне", "years in design"],
  [
    ".hero-meta > div:nth-child(3) span",
    "от идеи до финала",
    "from idea to delivery",
  ],
  [
    "#profile .section-label",
    "<span>01</span> Профиль",
    "<span>01</span> Profile",
    true,
  ],
  [
    "#profile-title",
    "Motion — основа.<br>3D и AI — усиление.",
    "Motion at the core.<br>3D and AI as an edge.",
    true,
  ],
  [
    "#profile .large-copy",
    "Motion Designer с коммерческим опытом в рекламе, бренд-коммуникациях и производстве визуального контента. Создаю ролики полного цикла: от идеи, референсов и раскадровки до анимации, композитинга и монтажа.",
    "Motion Designer with commercial experience in advertising, brand communications and visual content production. I deliver complete projects from concept, references and storyboards to animation, compositing and editing.",
  ],
  [
    "#profile .section-content > p:last-child",
    "Использую 3D-графику и AI-инструменты для разработки выразительных сцен, подготовки ассетов и ускорения производства. Работал с автомобильными, финансовыми и digital-проектами, включая Okko, Haier, GAZ и «Современные транспортные технологии».",
    "I use 3D graphics and AI tools to develop expressive scenes, prepare assets and accelerate production. My experience spans automotive, finance and digital projects, including work for Okko, Haier, GAZ and Modern Transport Technologies.",
  ],
  [
    "#skills .section-label",
    "<span>02</span> Экспертиза",
    "<span>02</span> Expertise",
    true,
  ],
  ["#skills-title", "Что я умею", "What I do"],
  [".skill-card:nth-child(1) h3", "Motion design", "Motion design"],
  [
    ".skill-card:nth-child(1) p",
    "2D-анимация, типографика, инфографика, рекламные и имиджевые ролики.",
    "2D animation, kinetic typography, infographics, advertising and brand films.",
  ],
  [".skill-card:nth-child(2) h3", "3D в motion", "3D for motion"],
  [
    ".skill-card:nth-child(2) p",
    "Моделирование, материалы, свет, рендеринг и интеграция 3D в видеоряд.",
    "Modelling, materials, lighting, rendering and seamless 3D integration.",
  ],
  [
    ".skill-card:nth-child(3) p",
    "Концепция, storyboard, композитинг, монтаж, цветокоррекция и адаптация форматов.",
    "Concept, storyboards, compositing, editing, colour grading and format adaptation.",
  ],
  [
    ".skill-card:nth-child(4) p",
    "Поиск визуальных направлений, подготовка и доработка ассетов, постобработка.",
    "Visual research, asset development and refinement, and post-production.",
  ],
  [
    "#experience .section-label",
    "<span>03</span> Опыт",
    "<span>03</span> Experience",
    true,
  ],
  ["#experience-title", "Коммерческий опыт", "Professional experience"],
  [".job:nth-child(1) .job-period", "01.2026 — сейчас", "01.2026 — present"],
  [
    ".job:nth-child(1) .job-heading h3",
    "Full-cycle Motion Designer",
    "Full-cycle Motion Designer",
  ],
  [
    ".job:nth-child(1) .job-heading span",
    "Фриланс · удалённо",
    "Freelance · remote",
  ],
  [
    ".job:nth-child(1) li:nth-child(1)",
    "Создаю рекламные и анимационные ролики — от поиска визуального решения до финальной сборки.",
    "Creating advertising and animated films from visual direction through final delivery.",
  ],
  [
    ".job:nth-child(1) li:nth-child(2)",
    "Объединяю 2D-анимацию с 3D-графикой и AI-инструментами, выполняю композитинг и монтаж.",
    "Combining 2D animation with 3D graphics and AI tools, including compositing and editing.",
  ],
  [
    ".job:nth-child(1) li:nth-child(3)",
    "Самостоятельно взаимодействую с заказчиками, оцениваю сроки и организую производство.",
    "Managing client communication, estimates and the complete production process.",
  ],
  [
    ".job:nth-child(2) .job-heading span",
    "Дизайн-студия Atomic",
    "Atomic Design Studio",
  ],
  [
    ".job:nth-child(2) li:nth-child(1)",
    "Создавал рекламные и имиджевые анимационные ролики для брендов Okko и Haier.",
    "Created advertising and brand animation for Okko and Haier.",
  ],
  [
    ".job:nth-child(2) li:nth-child(2)",
    "Работал с 2D-анимацией, композитингом и адаптацией роликов под разные форматы.",
    "Produced 2D animation, compositing and multi-format adaptations.",
  ],
  [
    ".job:nth-child(2) li:nth-child(3)",
    "Оптимизировал шаблоны After Effects и применял expressions в повторяющихся операциях, автоматизировав значительную часть производственных задач.",
    "Optimised After Effects templates and used expressions for repetitive operations, automating a significant part of production.",
  ],
  [
    ".job:nth-child(2) li:nth-child(4)",
    "Разрабатывал переиспользуемые решения, ускорявшие пайплайн команды при выпуске большого объёма контента.",
    "Developed reusable systems that accelerated the team's high-volume content pipeline.",
  ],
  [
    ".job:nth-child(3) .job-heading h3",
    "Графический / Motion / 3D Designer",
    "Graphic / Motion / 3D Designer",
  ],
  [
    ".job:nth-child(3) .job-heading span",
    "Подрядчик ГК СТТ · Москва",
    "STT Group contractor · Moscow",
  ],
  [
    ".job:nth-child(3) li:nth-child(1)",
    "Создавал визуальный и анимационный контент для GAZ и «Современных транспортных технологий».",
    "Created visual and animated content for GAZ and Modern Transport Technologies.",
  ],
  [
    ".job:nth-child(3) li:nth-child(2)",
    "Вёл производство 3D-контента: от скетчей и моделирования автомобилей до света, рендера и анимации.",
    "Handled 3D production from sketches and vehicle modelling to lighting, rendering and animation.",
  ],
  [
    ".job:nth-child(3) li:nth-child(3)",
    "Выполнял композитинг, монтаж и адаптацию материалов под задачи маркетинга.",
    "Delivered compositing, editing and marketing-format adaptations.",
  ],
  [
    ".job:nth-child(4) .job-heading span",
    "ИП Милимов Алексей · фриланс",
    "Alex Milimov · freelance",
  ],
  [
    ".job:nth-child(4) li:nth-child(1)",
    "Создавал рекламные и продуктовые ролики, 3D-визуализации, анимированные презентации и digital-контент.",
    "Created advertising and product films, 3D visualisations, animated presentations and digital content.",
  ],
  [
    ".job:nth-child(4) li:nth-child(2)",
    "Работал по полному циклу: концепция, storyboard, моделирование, анимация, рендер, композитинг и монтаж.",
    "Covered the full cycle: concept, storyboards, modelling, animation, rendering, compositing and editing.",
  ],
  [
    ".job:nth-child(4) li:nth-child(3)",
    "Взаимодействовал с заказчиками и веб-разработчиками, готовил 3D-модели и анимацию для интерактивных проектов.",
    "Worked with clients and web developers, preparing 3D models and animation for interactive projects.",
  ],
  [
    ".earlier-experience summary",
    "Ранний опыт — 2017–2021 <span>Раскрыть</span>",
    "Earlier experience — 2017–2021 <span>Expand</span>",
    true,
  ],
  [
    ".earlier-list > div:nth-child(1) p",
    "3D-графика и анимация для рекламных кампаний, презентаций и бренд-коммуникаций.",
    "3D graphics and animation for advertising campaigns, presentations and brand communications.",
  ],
  [
    ".earlier-list > div:nth-child(2) strong",
    "Графический / 3D Designer",
    "Graphic / 3D Designer",
  ],
  [
    ".earlier-list > div:nth-child(2) p",
    "Рекламные материалы, 3D-анимация для ТВ и digital, участие в ребрендинге.",
    "Advertising assets, 3D animation for TV and digital, and rebranding support.",
  ],
  [
    ".earlier-list > div:nth-child(3) strong",
    "Графический дизайнер / Проектировщик",
    "Graphic Designer / Spatial Designer",
  ],
  [
    ".earlier-list > div:nth-child(3) p",
    "Motion-контент, инфографика, презентации, POS-материалы и 3D-визуализации.",
    "Motion content, infographics, presentations, POS materials and 3D visualisation.",
  ],
  [
    ".earlier-list > div:nth-child(4) strong",
    "Графический дизайнер",
    "Graphic Designer",
  ],
  [
    ".earlier-list > div:nth-child(4) p",
    "Анимация, инфографика, синемаграфы и GIF-контент для социальных сетей.",
    "Animation, infographics, cinemagraphs and GIF content for social media.",
  ],
  [
    ".education .section-label",
    "<span>04</span> Образование",
    "<span>04</span> Education",
    true,
  ],
  ["#education-title", "Образование и курсы", "Education and courses"],
  [
    ".education-list article:nth-child(1) h3",
    "Поволжский государственный университет сервиса",
    "Volga Region State University of Service",
  ],
  [
    ".education-list article:nth-child(1) p",
    "Сервис персональных компьютеров и микровычислительной техники",
    "Personal computer and microcomputer systems service",
  ],
  [
    ".education-list article:nth-child(3) p",
    "Софт Культура · VideoSmile",
    "Soft Culture · VideoSmile",
  ],
  ["#contact .eyebrow", "Открыт к предложениям", "Open to opportunities"],
  [
    "#contact-title",
    "Motion design для брендов, продуктов <br>и диджитал-коммуникаций<span>.</span>",
    "Motion design for brands,products <br>and digital communications<span>.</span>",
    true,
  ],
  [".kinetic-label", "Фокус:", "Focus:"],
  [".site-footer span", "© 2026 Алексей Милимов", "© 2026 Alex Milimov"],
  [".site-footer a", "Наверх ↑", "Back to top ↑"],
];

const languageButtons = document.querySelectorAll("[data-lang]");
const description = document.querySelector('meta[name="description"]');
const kineticWord = document.querySelector(".kinetic-word");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const kineticWords = {
  ru: ["Реклама", "Брендинг", "Продукты", "Диджитал"],
  en: ["Advertising", "Branding", "Products", "Digital"],
};
const scrambleCharacters =
  "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let currentLanguage = "ru";
let kineticIndex = 0;
let kineticTimer;

function scrambleTo(nextWord) {
  if (!kineticWord) return;
  if (reducedMotion.matches) {
    kineticWord.textContent = nextWord;
    return;
  }

  const startedAt = performance.now();
  const duration = 520;

  function draw(now) {
    const progress = Math.min((now - startedAt) / duration, 1);
    const fixedCharacters = Math.floor(progress * nextWord.length);
    kineticWord.textContent = [...nextWord]
      .map((character, index) => {
        if (character === " " || index < fixedCharacters) return character;
        return scrambleCharacters[
          Math.floor(Math.random() * scrambleCharacters.length)
        ];
      })
      .join("");
    if (progress < 1) requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

function restartKineticText() {
  clearInterval(kineticTimer);
  kineticIndex = 0;
  if (!kineticWord) return;
  kineticWord.textContent = kineticWords[currentLanguage][0];
  if (reducedMotion.matches) return;
  kineticTimer = setInterval(() => {
    kineticIndex = (kineticIndex + 1) % kineticWords[currentLanguage].length;
    scrambleTo(kineticWords[currentLanguage][kineticIndex]);
  }, 2400);
}

function setLanguage(language) {
  const lang = language === "en" ? "en" : "ru";
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.title =
    lang === "ru"
      ? "Алексей Милимов — Motion Designer"
      : "Alex Milimov — Motion Designer";
  description.content =
    lang === "ru"
      ? "Алексей Милимов — Motion Designer. 2D-анимация, 3D-графика и AI-assisted production."
      : "Alex Milimov — Motion Designer. 2D animation, 3D graphics and AI-assisted production.";

  translations.forEach(([selector, ru, en, usesHtml = false]) => {
    const element = document.querySelector(selector);
    if (!element) return;
    const value = lang === "ru" ? ru : en;
    if (usesHtml) element.innerHTML = value;
    else element.textContent = value;
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  localStorage.setItem("resume-language", lang);
  restartKineticText();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const savedLanguage = localStorage.getItem("resume-language");
const preferredLanguage = navigator.language.toLowerCase().startsWith("ru")
  ? "ru"
  : "en";
setLanguage(savedLanguage || preferredLanguage);
