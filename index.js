const buttonRandom = document.querySelector(".button-random");
const colors = [
  "#00aefd",
  "#ffa400",
  "#07a787",
  "#ff7870",
  "pink",
  "yellow",
  "#e74c3c",
  "#2979ff",
];
function myFunction() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}