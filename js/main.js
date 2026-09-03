import { COMPANY } from "./config.js";

const htmlEl = document.documentElement;

// ---- dark mode ----
function initDarkMode() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (saved === "dark" || (!saved && prefersDark)) htmlEl.classList.add("dark");

  document.getElementById("darkToggle")?.addEventListener("click", () => {
    const isDark = htmlEl.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    window.lucide?.createIcons();
  });
}

// ---- mobile nav ----
function initNav() {
  const btn = document.getElementById("mobileBtn");
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("mobileOverlay");
  if (!btn || !menu) return;

  function setMenu(open) {
    menu.classList.toggle("hidden", !open);
    overlay?.classList.toggle("hidden", !open);
    btn.setAttribute("aria-expanded", String(open));
    btn.querySelector(".icon-menu")?.classList.toggle("hidden", open);
    btn.querySelector(".icon-close")?.classList.toggle("hidden", !open);
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.style.overflow = open ? "hidden" : "";
  }

  btn.addEventListener("click", () => {
    setMenu(menu.classList.contains("hidden"));
    window.lucide?.createIcons();
  });
  overlay?.addEventListener("click", () => setMenu(false));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) setMenu(false);
  });
}

// ---- gallery filter ----
function initGallery() {
  const btns = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".gallery-item");
  if (!btns.length) return;

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const f = btn.dataset.filter;
      items.forEach((it) => {
        const show = f === "all" || it.dataset.cat === f;
        it.style.display = show ? "" : "none";
      });
    });
  });
}

// ---- form ----
function initForm() {
  const form = document.getElementById("devisForm");
  const success = document.getElementById("formSuccess");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    success?.classList.remove("hidden");
    form.reset();
    setTimeout(() => success?.classList.add("hidden"), 6000);
  });
}

// ---- navbar shadow (rAF) ----
function initNavbarShadow() {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        nav.classList.toggle("shadow-md", window.scrollY > 20);
        ticking = false;
      });
    },
    { passive: true }
  );
}

// ---- boot ----
window.lucide?.createIcons();
initDarkMode();
initNav();
initGallery();
initForm();
initNavbarShadow();

// expose for debug
window.SAITEK = { COMPANY };
