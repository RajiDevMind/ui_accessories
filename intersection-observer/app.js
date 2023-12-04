const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenEl = document.querySelectorAll(".hidden");

hiddenEl.forEach((el) => observer.observe(el));

const sendMessage = (message) => {
  console.log("msg:", message);
};

const getMessage = (sendMessage) => {
  const message = "mylove msg toyou";

  sendMessage(message);
};
getMessage(sendMessage);

// print x in a pattern
function printPattern(rows) {
  for (let i = rows; i >= 1; i--) {
    let row = "";
    for (let pstar = 1; pstar <= (rows - i) * 2; pstar++) {
      row = row + "";
    }
    for (let kstar = 1; kstar <= i; kstar++) {
      row = row + "* ";
    }
    console.log(row);
  }
}

printPattern(10);
