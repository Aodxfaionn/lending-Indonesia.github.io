const btnPrev = document.querySelector(".arrow-left");
const btnNext = document.querySelector(".arrow-right");
const slider = document.querySelector(".sliderBlock");

let left = 0;
let imgWidth = 435;

const slideClick = (side) => {
  side == "left" ? (left -= imgWidth) : (left += imgWidth);
  if (left < -2610) {
    left = 0;
  }
  if (left > 0) {
    left = -2610;
  }
  slider.style.left = left + "px";
};

btnPrev.addEventListener("click", () => {
  slideClick("right");
});

btnNext.addEventListener("click", () => {
  slideClick("left");
});
