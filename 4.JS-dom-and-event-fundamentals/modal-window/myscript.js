let model = document.querySelector(".model");
let overlay = document.querySelector(".overlay");
let btnCloseModel = document.querySelector(".close-model");
let btnsOpenModel = document.querySelectorAll(".show-model");

let openModel = function () {
  model.classList.remove("hidden");
  // this means access to class of model and remove the class called hidden from it.here no need to use "."
  overlay.classList.remove("hidden");
};

let closeModel = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener("click", openModel);
}
btnCloseModel.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

// using escapekey
//event can be any argument and .key refers to any key that is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !model.classList.contains("hidden")) {
    closeModel();
  }
});
