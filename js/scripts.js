var btn = document.querySelector(".map-contact-btn");
var popup = document.querySelector(".popup-feedback");
var close = document.querySelector(".feedback-closer");
var overlay = document.querySelector(".feedback-overlay");

btn.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-show");
  overlay.classList.add("popup-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-show");
  overlay.classList.remove("popup-show");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-show");
  overlay.classList.remove("popup-show");
});
