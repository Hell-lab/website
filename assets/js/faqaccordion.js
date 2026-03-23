document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".faq-accordion");

  accordions.forEach((accordion) => {
    const items = accordion.querySelectorAll("details");

    items.forEach((item) => {
      item.addEventListener("toggle", function () {
        if (item.open) {
          items.forEach((other) => {
            if (other !== item) {
              other.open = false;
            }
          });
        }
      });
    });
  });
});