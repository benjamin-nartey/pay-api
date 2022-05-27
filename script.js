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
