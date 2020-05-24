// var navMain = document.querySelector(".main-nav");
// var navToggle = document.querySelector(".main-nav__toggle");
// var header = document.querySelector(".page-header");

var fill = document.querySelector(".icons-controls__fill");
var barFill = document.querySelector(".controls-bar__toggle--fill");
var active = document.querySelector(".icons-controls--active");

barFill.addEventListener("mousedown", function() {
  fill.classList.add("active");
});

// barFill.addEventListener(
//   "mouseup",
//   fill.classList.remove("icons-controls--active")
// );

/*
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
});*/
