function doJobAfterServerResponds(data) {
  const allBreeds = getAllBreeds(data);
  fillGaleryWithPhotos(allBreeds);
}

function getFromApiImage(breed) {
  const dynamicSegment = breed.replace(" ", "/");
  return fetch(`https://dog.ceo/api/breed/${dynamicSegment}/images/random`)
    .then((req) => req.json())
    .then((res) => {
      return res;
    });
}

async function fillGaleryWithPhotos(allBreads) {
  let html = ``;

  const promises = allBreads.map((breed) => getFromApiImage(breed));

  try {
    const allDogPhotos = await Promise.all(promises);

    allDogPhotos.forEach((dogPhoto, index) => {
      const breed = allBreads[index];

      html += `
          <div>
              <img
                  src="${dogPhoto.message}"  
                  alt="Dog"
                  height="200"
              />
          
              <article class="mt-2">
                  <h5>${breed}</h5>
              </article>
          </div>
        `;
    });

    document.getElementById("breedGaleryCont").innerHTML = html;
  } catch (error) {
    console.error("Klaida:", error);
  }
}

fetch("https://dog.ceo/api/breeds/list/all")
  .then((headerRowData) => {
    return headerRowData.json();
  })
  .then((data) => {
    doJobAfterServerResponds(data);
  });
