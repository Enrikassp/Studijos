const body = document.querySelector("body");
const hexText = document.querySelector(".hexCode");

function generateHexColor() {
  const randomHexCode = "#" + Math.random().toString(16).substring(2, 8);
  hexText.innerHTML = randomHexCode;
  body.style.backgroundColor = randomHexCode;
}

body.addEventListener("wheel", generateHexColor);
