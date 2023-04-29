// Якорные ссылки
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

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
    if (window.scrollY != 0) {
      window.scrollBy(0, scrollStep);
    } else clearInterval(scrollInterval);
  }, 15);
}

window.addEventListener("scroll", scrollFunction);
scrollBtn.addEventListener("click", topFunction);
