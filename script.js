"use strict";

let navbar = document.querySelector("nav");

let sticky = navbar.offsetTop;

window.onscroll = function () {
  fixedOnScroll();
};

function fixedOnScroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const menuToggle = document.querySelector("#menu");
const btnClose = document.querySelector("#close");

menuToggle.addEventListener("click", function () {
  if (navbar.style.display !== "block") {
    navbar.style.display = "block";
    menuToggle.style.display = "none";
    btnClose.style.display = "block";
    navbar.style.animation = "move-right";
    navbar.style.animationDuration = ".35s";
    navbar.style.animationTimingFunction = "ease-out";
  }
});

btnClose.addEventListener("click", function () {
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
    menuToggle.style.display = "block";
    btnClose.style.display = "none";
    navbar.style.animation = "move-right";
    navbar.style.animationDuration = ".35s";
    navbar.style.animationTimingFunction = "ease-out";
  }
});
