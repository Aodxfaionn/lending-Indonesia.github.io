const menu = document.querySelector(".mobileMenu");
const nav = document.querySelector("nav");

menu.addEventListener("click", function () {
  nav.classList.toggle("open");
});

// Скролл вверх
const scrollBtn = document.getElementById("scroll-top-button");
function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    scrollBtn.style.display = "flex";
    scrollBtn.addEventListener("click", function () {
      document.body.scrollTop = 0;
    });
  } else {
    scrollBtn.style.display = "none";
  }
}
window.addEventListener("scroll", scrollFunction);

function topFunction() {
  let scrollStep = -window.scrollY / (500 / 15),
    scrollInterval = setInterval(function () {
      if (window.scrollY != 0) {
        window.scrollBy(0, scrollStep);
      } else clearInterval(scrollInterval);
    }, 15);
}

// При скролле наверх появляется хедер
const headerMini = document.querySelector(".headerMini");
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    headerMini.style.top = "0";
  }
  if (prevScrollpos < 450) {
    headerMini.style.top = "-80px";
    scrollBlock.classList.remove("open");
  }
  prevScrollpos = currentScrollPos;
};

const clientList = document.querySelectorAll(".clients__list"),
  pag = document.querySelector(".pagination");

// По умолчанию пагинации нет, но если списков клиентов больше одного - кнопки отрисовываются в зависимости от количества списков.
if (clientList.length > 1) {
  for (let i = 1; i <= clientList.length; i++) {
    pag.style.display = "flex";
    let span = document.createElement("span");
    span.classList.add("line");
    pag.appendChild(span);
    if (i == 1) {
      span.classList.add("activeLine");
    }
  }
}

// По клику линия получает доп.класс, с остальных он удаляется
const lines = document.querySelectorAll(".line");
pag.addEventListener("click", (event) => {
  let target = event.target;
  if (target.classList.contains("line")) {
    for (let i = 0; i < lines.length; i++) {
      lines[i].classList.remove("activeLine");
    }
    target.classList.add("activeLine");
  }
});

// По клику на линию меняется список с клиентами
for (let i = 0; i < lines.length; i++) {
  lines[i].addEventListener("click", function () {
    for (list of clientList) {
      list.style.display = "none";
    }
    clientList[i].style.display = "flex";
  });
}