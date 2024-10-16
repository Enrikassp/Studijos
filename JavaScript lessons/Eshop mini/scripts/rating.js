const allRatings = document.querySelectorAll(".rating");
let selectedProductIndex;
const starElements = [];

function starEnterHandler(e) {
  const starIndex = e.target.attributes["star-index"].value;
  const parentElement = e.target.parentElement;
  console.log(starElements.length);
  parentElement.innerHTML = "";
  for (let i = 0; i <= starIndex; i++) {
    // starElements[i].innerHTML = ``;
    // starElements[i].parent.innerHTML = fullStar();
    parentElement.innerHTML += fullStar();
  }
}

function ratingHoverHandler(event) {
  const eventTarget = event.target;
  const whichElement = eventTarget.attributes["productIndex"].value;
  console.log(`Cia buvo pasirinktas reitingas ${whichElement} produkto`);
  selectedProductIndex = whichElement;
  const starList = document.querySelectorAll(".rating:hover i");

  starList.forEach((star, index) => {
    star.setAttribute("star-index", `${index}`);
    star.addEventListener("mouseenter", starEnterHandler);
    starElements.push(star);
  });
}

function ratingHoverLeaveHandler() {
  starElements.forEach((star, index) => {
    star.removeEventListener("mouseenter", starEnterHandler);
  });
  selectedProductIndex = undefined;
  starElements.length = 0;
}

for (const rating of allRatings) {
  rating.addEventListener("mouseenter", ratingHoverHandler);
  rating.addEventListener("mouseleave", ratingHoverLeaveHandler);
}
