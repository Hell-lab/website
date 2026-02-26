document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".custom-side-menu");
  const toggle = document.querySelector(".side-menu-toggle");
  const menu = document.querySelector(".side-menu");

  if (!container || !toggle || !menu) return;

  function openMenu() {
    menu.classList.add("active");
    toggle.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    menu.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  }

  function isOpen() {
    return menu.classList.contains("active");
  }

  toggle.addEventListener("click", function (e) {
    e.stopPropagation(); 
    if (isOpen()) closeMenu();
    else openMenu();
  });

  document.addEventListener("click", function (e) {
    if (!isOpen()) return;
    if (!container.contains(e.target)) closeMenu();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen()) closeMenu();
  });
});