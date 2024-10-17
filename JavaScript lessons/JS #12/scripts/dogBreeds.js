function fillSelectWithOptions(breeds) {
  const breedsSelect = document.querySelector(".breedSelection");
  let html =
    "<option value=default selected disabled>Paspauskite kad pasirinktumėte</option>";

  for (const breed of breeds) {
    html += `<option value="${breed}">${breed}</option>`;
  }

  breedsSelect.innerHTML = html;
}

function doJobAfterServerRespondsWithImage(data) {
  const dogArticle = document.querySelector("#dogArticle");
  const imgElement = document.querySelector("#dynamic-image");
  imgElement.src = data.message;
  dogArticle.classList.remove("d-none");
}

function getPhotoOfSelectedDog() {
  const selectedBreed = document.querySelector(".breedSelection").value;
  const dogTitle = document.querySelector(".dogTitle");
  const dynamicSegment = selectedBreed.replace(" ", "/");
  dogTitle.innerHTML = toTitleCase(selectedBreed);
  if (selectedBreed !== "default") {
    fetch(`https://dog.ceo/api/breed/${dynamicSegment}/images/random`)
      .then((req) => req.json())
      .then((res) => doJobAfterServerRespondsWithImage(res));
  }
}

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
