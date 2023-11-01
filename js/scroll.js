// Кнопка скролла
const scrollBtn = document.querySelector("#scroll");
function scrollFunction() {
  if (
    document.body.scrollTop > 550 ||
    document.documentElement.scrollTop > 550
  ) {
    scrollBtn.classList.add("open");
  } else {
    scrollBtn.classList.remove("open");
  }
}

function topFunction() {
  let scrollStep = -window.scrollY / (500 / 15);
  let scrollInterval = setInterval(function () {
    if (window.scrollY != 0) window.scrollBy(0, scrollStep);
    else clearInterval(scrollInterval);
  }, 15);
}

// плавное появление блоков
window.addEventListener("scroll", scrollFunction);
scrollBtn.addEventListener("click", topFunction);

const screenHeight = document.documentElement.clientHeight;
const appearanceBlock = document.querySelectorAll(".appearance");

function scrolling() {
  for (var i = 0; i < appearanceBlock.length; i++) {
    if (isPartVisible(appearanceBlock[i])) appearanceBlock[i].classList.add("active");
    // else appearanceBlock[i].classList.remove("active");
  }
}

function isPartVisible(block) {
  const elementBoundary = block.getBoundingClientRect();
  const top = elementBoundary.top;
  const bottom = elementBoundary.bottom;
  const height = elementBoundary.height;
  return top + height >= 0 && height + screenHeight > bottom;
}

window.addEventListener("scroll", scrolling);
