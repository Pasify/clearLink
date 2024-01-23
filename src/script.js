"use strict";
const accordionBtn = document.querySelectorAll(".accordion-button");
const yearElement = document.querySelector(".year");

accordionBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    let panel = btn.parentElement.nextElementSibling;
    panel.classList.toggle("hidden");
    let icon = btn.querySelector("img");
    if (panel.classList.contains("hidden")) {
      icon.src = "./assets/show.png";
    } else {
      icon.src = "./assets/hide.png";
    }
  }),
);

let currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
