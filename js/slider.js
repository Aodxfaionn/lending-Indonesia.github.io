const btnPrev = document.querySelector(".arrow-left");
const btnNext = document.querySelector(".arrow-right");
const slider = document.querySelector(".sliderBlock");
let img_width = document.querySelector('.slider').clientWidth;

let left = 0;
let imgWidth = 431;

const slideClick = (side) => {
  side == "left" ? (left -= imgWidth) : (left += imgWidth);
  if (left < -2570) left = 0;
  if (left > 0) left = -2570;
  slider.style.left = left + "px";
};

btnPrev.addEventListener("click", () => slideClick("right"));
btnNext.addEventListener("click", () => slideClick("left"));
