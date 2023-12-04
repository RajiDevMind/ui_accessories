const inputEl = document.querySelector(".inputcheckbox");
const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));
// function change background color
const updateChecked = () => {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = "black";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
};
updateChecked();

// event update background color
inputEl.addEventListener("input", () => {
  updateChecked();
  updateLocalStorage();
});

// func to store users settings to local storage

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
