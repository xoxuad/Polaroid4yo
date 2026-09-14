/* =========================================================
   POLAROID4YO — SCRIPT.JS
   All content that can change (text, templates, formats, FAQ)
   lives in plain data objects/arrays below, so this file can
   be edited by anyone without needing to touch the HTML.
========================================================= */

/* ---------- 1. TRANSLATIONS ----------
   Add or edit any text here. Keys are referenced from the
   HTML via data-i18n="section.key" and from the render
   functions below for repeated content (formats/steps/faq). */
const translations = {
  fr: {
    a11y: { skip: "Aller au contenu principal" },
    nav: {
      home: "Accueil",
      product: "Nos Polaroids",
      templates: "Templates",
      how: "Comment ça marche",
      faq: "FAQ",
      order: "Commander"
    },
    hero: {
      eyebrow: "📸 Édition Polaroid faite avec soin",
      title: "Transformez vos souvenirs en Polaroids.",
      subtitle: "Des souvenirs à garder, à offrir et à revivre. Créez votre pack de Polaroids avec vos photos préférées.",
      ctaPrimary: "Découvrir nos Polaroids →",
      ctaSecondary: "Commander sur Instagram ↗"
    },
    product: {
      title: "Nos Polaroids",
      lead: "Imprimez vos moments préférés dans un format Polaroid élégant et intemporel.",
      point1: "Impression de qualité, couleurs fidèles et rendu doux.",
      point2: "Format Polaroid iconique, parfait à offrir ou à coller sur un mur.",
      point3: "Vos photos, vos souvenirs — préparés à la main, pack par pack.",
      cta: "Commander sur Instagram ↗"
    },
    pricing: {
      eyebrow: "Le prix, simplement",
      unit: "/ Polaroid",
      min: "Minimum 12 Polaroids",
      packLabel: "Pack minimum :",
      explain: "Chaque Polaroid coûte 3 DH. Le minimum de commande est de 12 Polaroids, soit 36 DH."
    },
    formats: {
      title: "Formats disponibles",
      lead: "Un aperçu de ce qui est possible — parlez-nous de votre préférence sur Instagram."
    },
    templates: {
      title: "Nos Templates",
      lead: "Cliquez sur un template pour l'admirer en grand.",
      closeLabel: "Fermer"
    },
    how: { title: "Comment ça marche ?" },
    cta: {
      title: "Prêt à transformer vos souvenirs ?",
      subtitle: "Commandez vos Polaroids directement sur Instagram.",
      button: "Commander sur Instagram ↗"
    },
    faq: { title: "Questions fréquentes" },
    footer: {
      desc: "Des Polaroids personnalisés, préparés avec soin, à commander sur Instagram.",
      navHeading: "Navigation",
      langHeading: "Langue",
      rights: "Tous droits réservés."
    },
    /* Repeated content lists */
    formatsList: [
      { title: "Small",   desc: "Format compact, parfait pour une collection ou un mini-album.", shape: "small" },
      { title: "Large",   desc: "Format généreux, idéal pour mettre une photo bien en valeur.", shape: "large" },
      { title: "Portrait",desc: "Orientation verticale, pensée pour les portraits et les souvenirs à deux.", shape: "portrait" },
      { title: "Square",  desc: "Format carré, le classique intemporel du style Polaroid.", shape: "square" }
    ],
    stepsList: [
      { number: "01", title: "Choisissez vos photos", desc: "Sélectionnez vos souvenirs préférés." },
      { number: "02", title: "Choisissez votre style", desc: "Découvrez nos formats et templates." },
      { number: "03", title: "Contactez-nous sur Instagram", desc: "Envoyez-nous votre demande." },
      { number: "04", title: "Recevez vos Polaroids", desc: "Nous préparons votre commande avec soin." }
    ],
    faqList: [
      { q: "Combien coûte un Polaroid ?", a: "Chaque Polaroid coûte 3 DH." },
      { q: "Quel est le minimum de commande ?", a: "Le minimum est de 12 Polaroids, soit 36 DH." },
      { q: "Quels formats proposez-vous ?", a: "Nous proposons des formats Small et Large, ainsi que des formats Portrait et Square." },
      { q: "Comment commander ?", a: "Contactez-nous directement sur Instagram pour passer votre commande." }
    ]
  },

  en: {
    a11y: { skip: "Skip to main content" },
    nav: {
      home: "Home",
      product: "Our Polaroids",
      templates: "Templates",
      how: "How it works",
      faq: "FAQ",
      order: "Order"
    },
    hero: {
      eyebrow: "📸 Polaroid edition, made with care",
      title: "Turn your memories into Polaroids.",
      subtitle: "Memories to keep, share and relive. Create your Polaroid pack with your favorite photos.",
      ctaPrimary: "Discover our Polaroids →",
      ctaSecondary: "Order on Instagram ↗"
    },
    product: {
      title: "Our Polaroids",
      lead: "Print your favorite moments in a timeless and beautiful Polaroid format.",
      point1: "Quality printing, true-to-life colors and a soft finish.",
      point2: "The iconic Polaroid format, perfect as a gift or on a wall.",
      point3: "Your photos, your memories — prepared by hand, pack by pack.",
      cta: "Order on Instagram ↗"
    },
    pricing: {
      eyebrow: "The price, simply",
      unit: "/ Polaroid",
      min: "Minimum 12 Polaroids",
      packLabel: "Minimum pack:",
      explain: "Each Polaroid costs 3 DH. The minimum order is 12 Polaroids, starting from 36 DH."
    },
    formats: {
      title: "Available formats",
      lead: "A preview of what's possible — tell us your preference on Instagram."
    },
    templates: {
      title: "Our Templates",
      lead: "Click a template to see it in full size.",
      closeLabel: "Close"
    },
    how: { title: "How it works" },
    cta: {
      title: "Ready to turn your memories into Polaroids?",
      subtitle: "Order your Polaroids directly through Instagram.",
      button: "Order on Instagram ↗"
    },
    faq: { title: "Frequently asked questions" },
    footer: {
      desc: "Custom Polaroids, prepared with care, to order on Instagram.",
      navHeading: "Navigation",
      langHeading: "Language",
      rights: "All rights reserved."
    },
    formatsList: [
      { title: "Small",    desc: "A compact format, perfect for a collection or a mini album.", shape: "small" },
      { title: "Large",    desc: "A generous format, ideal for showing off one favorite shot.", shape: "large" },
      { title: "Portrait", desc: "Vertical orientation, made for portraits and shared memories.", shape: "portrait" },
      { title: "Square",   desc: "A square format — the timeless Polaroid classic.", shape: "square" }
    ],
    stepsList: [
      { number: "01", title: "Choose your photos", desc: "Select your favorite memories." },
      { number: "02", title: "Discover your style", desc: "Explore our formats and templates." },
      { number: "03", title: "Contact us on Instagram", desc: "Send us your request." },
      { number: "04", title: "Receive your Polaroids", desc: "We prepare your order with care." }
    ],
    faqList: [
      { q: "How much does a Polaroid cost?", a: "Each Polaroid costs 3 DH." },
      { q: "What's the minimum order?", a: "The minimum is 12 Polaroids, starting from 36 DH." },
      { q: "What formats do you offer?", a: "We offer Small and Large formats, as well as Portrait and Square." },
      { q: "How do I order?", a: "Contact us directly on Instagram to place your order." }
    ]
  }
};

/* ---------- 2. TEMPLATES ----------
   Add or remove templates here. If "image" points to a real
   file that exists, it will be used. Otherwise a colorful
   placeholder is shown automatically. */
const templates = [
  { name: "Template 01", image: "assets/templates/template-01.jpg", color: "pink" },
  { name: "Template 02", image: "assets/templates/template-02.jpg", color: "sky" },
  { name: "Template 03", image: "assets/templates/template-03.jpg", color: "yellow" },
  { name: "Template 04", image: "assets/templates/template-04.jpg", color: "lavender" },
  { name: "Template 05", image: "assets/templates/template-05.jpg", color: "sky" },
  { name: "Template 06", image: "assets/templates/template-06.jpg", color: "pink" },
  { name: "Template 07", image: "assets/templates/template-07.jpg", color: "lavender" },
  { name: "Template 08", image: "assets/templates/template-08.jpg", color: "yellow" }
];

const colorMap = {
  pink: ["#F3C9D2", "#E8A7B6"],
  sky: ["#C3E4F2", "#9AD0E8"],
  yellow: ["#F6E1A6", "#EFCD6E"],
  lavender: ["#DAD3F2", "#BBADE4"]
};

/* Builds an inline gradient placeholder for a template card
   when no real image file is present yet. Keeps the gallery
   looking finished before real photos are added. */
function placeholderGradient(color) {
  const [a, b] = colorMap[color] || colorMap.pink;
  return `linear-gradient(155deg, ${a}, ${b})`;
}

/* ---------- 3. STATE ---------- */
let currentLang = localStorage.getItem("polaroid4yo-lang") || "fr";

/* ---------- 4. HELPERS ---------- */
function getNested(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
}

/* ---------- 5. RENDER: static data-i18n text nodes ---------- */
function applyStaticTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = getNested(translations[lang], el.getAttribute("data-i18n"));
    if (value !== null) el.textContent = value;
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
  });
}

/* ---------- 6. RENDER: formats grid ---------- */
function renderFormats(lang) {
  const grid = document.getElementById("formatsGrid");
  grid.innerHTML = "";
  translations[lang].formatsList.forEach((format) => {
    const card = document.createElement("article");
    card.className = "format-card";
    card.innerHTML = `
      <div class="format-shape ${format.shape}" style="background:${placeholderGradient(
      ["small", "square"].includes(format.shape) ? "yellow" : format.shape === "large" ? "sky" : "lavender"
    )}"></div>
      <h3>${format.title}</h3>
      <p>${format.desc}</p>
    `;
    grid.appendChild(card);
  });
}

/* ---------- 7. RENDER: templates gallery ---------- */
function renderTemplates() {
  const grid = document.getElementById("templatesGrid");
  grid.innerHTML = "";
  templates.forEach((tpl, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "template-card";
    card.setAttribute("aria-label", tpl.name);
    card.dataset.index = index;
    card.innerHTML = `
      <div class="template-photo" style="background:${placeholderGradient(tpl.color)}">
        <img src="${tpl.image}" alt="${tpl.name}" loading="lazy"
             onerror="this.style.display='none'">
      </div>
      <p class="template-name">${tpl.name}</p>
    `;
    card.addEventListener("click", () => openModal(index));
    grid.appendChild(card);
  });
}

/* ---------- 8. RENDER: how-it-works steps ---------- */
function renderSteps(lang) {
  const grid = document.getElementById("stepsGrid");
  grid.innerHTML = "";
  translations[lang].stepsList.forEach((step) => {
    const card = document.createElement("article");
    card.className = "step-card";
    card.innerHTML = `
      <span class="step-number">${step.number}</span>
      <h3>${step.title}</h3>
      <p>${step.desc}</p>
    `;
    grid.appendChild(card);
  });
}

/* ---------- 9. RENDER: FAQ accordion ---------- */
function renderFaq(lang) {
  const list = document.getElementById("faqList");
  list.innerHTML = "";
  translations[lang].faqList.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "faq-item";
    const qid = `faq-q-${index}`;
    const aid = `faq-a-${index}`;
    wrapper.innerHTML = `
      <button class="faq-question" id="${qid}" aria-expanded="false" aria-controls="${aid}">
        <span>${item.q}</span>
        <span class="faq-icon" aria-hidden="true"></span>
      </button>
      <div class="faq-answer" id="${aid}" role="region" aria-labelledby="${qid}">
        <p>${item.a}</p>
      </div>
    `;
    const question = wrapper.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isOpen = wrapper.classList.contains("is-open");
      // close every other item for a clean single-open accordion
      list.querySelectorAll(".faq-item").forEach((otherItem) => {
        otherItem.classList.remove("is-open");
        otherItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        wrapper.classList.add("is-open");
        question.setAttribute("aria-expanded", "true");
      }
    });
    list.appendChild(wrapper);
  });
}

/* ---------- 10. LANGUAGE SWITCH ---------- */
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("polaroid4yo-lang", lang);
  document.documentElement.lang = lang;
  applyStaticTranslations(lang);
  renderFormats(lang);
  renderSteps(lang);
  renderFaq(lang);
  // update currently open modal's labels/text, if any
  if (document.getElementById("templateModal").classList.contains("is-open")) {
    document.getElementById("modalClose").setAttribute("aria-label", translations[lang].templates.closeLabel);
  }
}

/* ---------- 11. TEMPLATE MODAL ---------- */
const modal = document.getElementById("templateModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");
let lastFocusedElement = null;

function openModal(index) {
  const tpl = templates[index];
  lastFocusedElement = document.activeElement;
  modalImage.style.background = placeholderGradient(tpl.color);
  modalImage.innerHTML = `<img src="${tpl.image}" alt="${tpl.name}" onerror="this.style.display='none'">`;
  modalTitle.textContent = tpl.name;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  modalClose.focus();
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocusedElement) lastFocusedElement.focus();
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

/* ---------- 12. MOBILE NAV ---------- */
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ---------- 13. LANGUAGE BUTTONS (nav + footer) ---------- */
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
});

/* ---------- 14. STICKY NAV BLUR ON SCROLL ---------- */
const header = document.getElementById("siteHeader");
function updateHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}
window.addEventListener("scroll", updateHeaderState, { passive: true });

/* ---------- 15. SCROLL REVEAL (IntersectionObserver) ---------- */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setupRevealAnimations() {
  const revealEls = document.querySelectorAll(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => observer.observe(el));
}

/* Adds .reveal to dynamically-created cards so they fade in too,
   then re-runs the observer setup for the newly added elements. */
function markDynamicSectionsForReveal() {
  document.querySelectorAll(".format-card, .step-card, .template-card, .faq-item").forEach((el) => {
    el.classList.add("reveal");
  });
}

/* ---------- 16. INIT ---------- */
function init() {
  document.documentElement.lang = currentLang;
  applyStaticTranslations(currentLang);
  renderFormats(currentLang);
  renderTemplates();
  renderSteps(currentLang);
  renderFaq(currentLang);
  updateHeaderState();
  markDynamicSectionsForReveal();
  setupRevealAnimations();
}

document.addEventListener("DOMContentLoaded", init);
