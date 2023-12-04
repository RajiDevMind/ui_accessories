const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgContEl = document.querySelector(".image-container");
const imgEl = document.querySelectorAll("img");
// console.log(imgEl);

let currentImg = 1;

let timeout;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});
prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgEl.length) {
    return (currentImg = 1);
  } else if (currentImg < 1) {
    currentImg = imgEl.length;
  }
  imgContEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
