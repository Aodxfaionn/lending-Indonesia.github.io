const menu = document.querySelector(".mobileMenu");
const nav = document.querySelector("nav");

menu.addEventListener("click", function () {
  nav.classList.toggle("open");
});

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