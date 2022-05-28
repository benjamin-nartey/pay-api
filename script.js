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

menuToggle.addEventListener("click", function () {
  if (navbar.style.display !== "block") {
    navbar.style.display = "block";
    navbar.style.animation = "move-right";
    navbar.style.animationDuration = ".35s";
    navbar.style.animationTimingFunction = "ease-out";
  } else {
    navbar.style.display = "none";
  }
});
