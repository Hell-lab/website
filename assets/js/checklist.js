document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".post-content li");

  items.forEach((li, index) => {
    const checkbox = li.querySelector(":scope > input[type='checkbox']");
    if (!checkbox) return;

    checkbox.disabled = false;

    let next = checkbox.nextSibling;
    const textNodes = [];

    while (next && !(next.nodeType === Node.ELEMENT_NODE && next.tagName === "UL")) {
      const current = next;
      next = next.nextSibling;

      if (current.nodeType === Node.TEXT_NODE && current.textContent.trim() !== "") {
        textNodes.push(current);
      }
    }

    if (textNodes.length > 0) {
      const labelSpan = document.createElement("span");
      labelSpan.className = "checklist-label";
      labelSpan.textContent = textNodes.map(n => n.textContent.trim()).join(" ");

      textNodes.forEach(n => n.remove());
      checkbox.insertAdjacentElement("afterend", labelSpan);
    }

    const labelText = li.querySelector(".checklist-label")?.textContent?.trim() || `item-${index}`;
    const key = `checklist:${window.location.pathname}:${labelText}`;

    const saved = localStorage.getItem(key);
    if (saved !== null) {
      checkbox.checked = saved === "true";
    }

    checkbox.addEventListener("change", function () {
      localStorage.setItem(key, checkbox.checked);
    });
  });
});