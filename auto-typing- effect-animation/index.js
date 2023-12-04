const contEl = document.querySelector(".container");

const careers = [
  "Web Developer",
  "Frontend Engineer",
  "Backend Engineer",
  "Content Creator",
];

let careerIndex = 0;

let characterIndex = 0;

const updateText = () => {
  characterIndex++;
  contEl.innerHTML = `<h1>I am ${
    careers[characterIndex].slice(0, 1) === "I" ? "an" : "a"
  }
    ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
};
updateText();
