let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  let use = document.querySelector(".use").innerHTML;
  let used = document.querySelector(".used").innerHTML;
  console.log(use, used);
});

var i = 0;
var text = "My coding journey";
var speed = 60;

function animationEffect() {
  if (i < text.length) {
    document.querySelector(".typing-demo").innerHTML += text.charAt(i);
    i++;
    setTimeout(animationEffect, speed);
  }
}
animationEffect();

// var clear = clearInterval(2000);
const divEl = document.querySelector(".animate");
setInterval(() => {
  divEl.innerHTML += "hello";
}, 2000);
