const scrollBtn = document.getElementById("scroll");
function scrollFunction() {
  if (
    document.body.scrollTop > 550 ||
    document.documentElement.scrollTop > 550
  ) {
    scrollBtn.classList.add('open');
    scrollBtn.addEventListener("click", function () {
      document.body.scrollTop = 0;
    });
  } else {
    scrollBtn.classList.remove('open');
  }
}

function topFunction() {
  let scrollStep = -window.scrollY / (500 / 15),
    scrollInterval = setInterval(function () {
      if (window.scrollY != 0) {
        window.scrollBy(0, scrollStep);
      } else clearInterval(scrollInterval);
    }, 15);
}

window.addEventListener("scroll", scrollFunction);
scrollBtn.addEventListener("click", topFunction);
