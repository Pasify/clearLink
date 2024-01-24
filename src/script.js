"use strict";
const accordionBtn = document.querySelectorAll(".accordion-button");
const yearElement = document.querySelector(".year");
const mobileMenu = document.querySelector("#mobileMenu");
const nav = document.querySelector(".nav");
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

nav.addEventListener("click", function (e) {
  let hamburger = e.target.closest("#hamburger");
  if (!hamburger) return;
  // mobileMenu.classList.toggle("hidden");

  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
});
