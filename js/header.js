// Бургерное меню
const menu = document.querySelector(".mobileMenu");
const nav = document.querySelector(".nav");

menu.addEventListener("click", function () {
  menu.classList.toggle("active");
  nav.classList.toggle("open");
});

// Смена фона mainScreen
const backgrounds = [
  "css/img/mainScreen.jpg",
  "css/img/mainScreen2.jpg",
  "css/img/mainScreen3.jpg",
];
let index = 0;
let sreen = document.querySelector(".mainScreen");
function bgChange() {
  sreen.style.backgroundImage = "url(" + backgrounds[index] + ")";
  index++;
  if (index >= backgrounds.length) {
    index = 0;
  }
}
bgChange();
window.setInterval(bgChange, 15000);
