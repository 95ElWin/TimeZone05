const toggleBtn = document.querySelector(".toggle");
const nav = document.querySelector("nav");

if (toggleBtn && nav) {
  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

const dropdownElements = document.querySelectorAll(".dropdown-element");

dropdownElements.forEach((item) => {
  const trigger = item.querySelector(".dropdown-title");
  const icon = item.querySelector("i.fa-plus, i.fa-minus");

  // Başlanğıcda plus ikonudur
  if (
    !icon.classList.contains("fa-plus") &&
    !icon.classList.contains("fa-minus")
  ) {
    icon.classList.add("fa-plus");
  }

  [trigger, icon].forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();

      if (window.innerWidth < 900) {
        // Digər açıq dropdownları bağla
        dropdownElements.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("open")) {
            otherItem.classList.remove("open");
            const otherIcon = otherItem.querySelector("i.fa-plus, i.fa-minus");
            if (otherIcon) {
              otherIcon.classList.remove("fa-minus");
              otherIcon.classList.add("fa-plus");
            }
          }
        });

        // Cari dropdown-u aç/bağla
        item.classList.toggle("open");

        if (item.classList.contains("open")) {
          icon.classList.remove("fa-plus");
          icon.classList.add("fa-minus");
        } else {
          icon.classList.remove("fa-minus");
          icon.classList.add("fa-plus");
        }
      }
    });
  });
});

// Ekran ölçüsü dəyişəndə açılmış dropdownları bağla və ikonları plusa çevir
window.addEventListener("resize", () => {
  if (window.innerWidth >= 900) {
    dropdownElements.forEach((item) => {
      item.classList.remove("open");
      const icon = item.querySelector("i.fa-plus, i.fa-minus");
      if (icon) {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
      }
    });
    nav.classList.remove("active");
  }
});
