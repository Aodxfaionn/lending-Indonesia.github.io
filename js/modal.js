const modal = document.querySelector("#modal"),
  btnsForm = document.querySelectorAll(".jsStart"),
  textModal = document.querySelector(".modal__content-title");

for (btnForm of btnsForm) {
  btnForm.addEventListener("click", (e) => modal.classList.add("open"));
}

modal.addEventListener("click", function (e) {
  e.preventDefault();
  let name = modal.querySelector("[name='name']"),
    tel = modal.querySelector("[name='tel']"),
    form = modal.querySelector("form");
  if (e.target == modal || e.target.closest(".close")) modal.classList.remove("open");
  if (e.target.closest(".btn")) {
    if (name.value == "" || tel.value == "") textModal.innerHTML = `Please, fill in all fields.`;
    else {
      textModal.innerHTML = `${name.value}, your application has been submitted.`;
      form.style.display = "none";
    }
  }
});

// Маска телефона
document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function (e) {
    var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+7(___) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
    if (clearVal !== "false" && e.type === "blur") {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = "";
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
  };
  var phone_inputs = document.querySelectorAll('input[name="tel"]');
  for (let elem of phone_inputs) {
    for (let ev of ["input", "blur", "focus"]) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});
