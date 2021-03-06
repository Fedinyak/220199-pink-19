var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var header = document.querySelector(".page-header");

navMain.classList.remove("main-nav--nojs");
header.classList.remove("page-header--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    navMain.classList.add("page-header--bg");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    navMain.classList.remove("page-header--bg");
  }
});
