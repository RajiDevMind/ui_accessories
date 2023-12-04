const popupEl = document.querySelector(".popup");
const btn = document.querySelector(".btn");
const removebtn = document.querySelector(".removebtn");

const displayPopup = () => {};

btn.addEventListener("click", function () {
  popupEl.classList.add("display");
});
removebtn.addEventListener("click", function () {
  popupEl.classList.remove("display");
});
