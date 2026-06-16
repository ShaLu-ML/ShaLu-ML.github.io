const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const filterButtons = document.querySelectorAll(".filter-button");
const publications = document.querySelectorAll(".publication-item");

if (window.lucide) {
  window.lucide.createIcons();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    publications.forEach((item) => {
      const topic = item.dataset.topic;
      item.hidden = filter !== "all" && topic !== filter;
    });
  });
});
