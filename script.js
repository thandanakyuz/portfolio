// ============================================================
// Portfolio interactions: mobile menu toggle + scroll-spy nav
// ============================================================

const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#main-menu");
const navLinks = document.querySelectorAll("#main-menu .nav__link");

const toggleMenu = () => {
  if (!menu) return;
  menu.classList.toggle("is-open");
  const isOpen = menu.classList.contains("is-open");
  menuButton?.setAttribute("aria-expanded", String(isOpen));
};

menuButton?.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menu?.classList.contains("is-open")) toggleMenu();
  });
});

// Scroll-spy: highlight nav link for the section currently in view.
const sections = document.querySelectorAll("section[id]");

// Active band: a 20%-tall horizontal slice in the vertical middle of the
// viewport. Whichever section overlaps this band is "active". Using rootMargin
// instead of threshold avoids the bug where sections taller than ~2x the
// viewport (e.g. Experience) can never reach a 50% visibility threshold.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const target = link.getAttribute("href");
        if (target === `#${entry.target.id}`) {
          link.classList.add("is-active");
        } else {
          link.classList.remove("is-active");
        }
      });
    });
  },
  { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
);

sections.forEach((section) => observer.observe(section));

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    observer.disconnect();
  } else {
    sections.forEach((section) => observer.observe(section));
  }
});

// Footer year
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// ============================================================
// Theme toggle (light/dark). The initial theme is set by an
// inline script in <head> to avoid a flash of unstyled content.
// ============================================================
const themeToggle = document.querySelector("#theme-toggle");

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("theme", theme);
  } catch (_) {
    /* localStorage unavailable — silently ignore */
  }
  themeToggle?.setAttribute(
    "aria-label",
    theme === "light" ? "Switch to dark theme" : "Switch to light theme",
  );
};

themeToggle?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  applyTheme(current === "light" ? "dark" : "light");
});

// Sync label on first paint
themeToggle?.setAttribute(
  "aria-label",
  document.documentElement.getAttribute("data-theme") === "light"
    ? "Switch to dark theme"
    : "Switch to light theme",
);
