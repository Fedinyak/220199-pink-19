var crop = document.querySelector(".icons-controls__crop");
var barCrop = document.querySelector(".controls-bar__toggle--crop");
var fill = document.querySelector(".icons-controls__fill");
var barFill = document.querySelector(".controls-bar__toggle--fill");
var contrast = document.querySelector(".icons-controls__contrast");
var barContrast = document.querySelector(".controls-bar__toggle--contrast");

barCrop.addEventListener("mouseover", function() {
  crop.classList.add("hover");
});

barCrop.addEventListener("mouseleave", function() {
  crop.classList.remove("hover");
  crop.classList.remove("down");
});

barCrop.addEventListener("mousedown", function() {
  crop.classList.add("down");
});

barCrop.addEventListener("mouseup", function() {
  crop.classList.remove("down");
});

barContrast.addEventListener("mouseover", function() {
  contrast.classList.add("hover");
});

barContrast.addEventListener("mouseleave", function() {
  contrast.classList.remove("hover");
  contrast.classList.remove("down");
});

barContrast.addEventListener("mousedown", function() {
  contrast.classList.add("down");
});

barContrast.addEventListener("mouseup", function() {
  contrast.classList.remove("down");
});

barFill.addEventListener("mouseover", function() {
  fill.classList.add("hover");
});

barFill.addEventListener("mouseleave", function() {
  fill.classList.remove("hover");
  fill.classList.remove("down");
});

barFill.addEventListener("mousedown", function() {
  fill.classList.add("down");
});

barFill.addEventListener("mouseup", function() {
  fill.classList.remove("down");
});
