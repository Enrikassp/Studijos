function doJobAfterServerResponds(data) {
  const allBreeds = getAllBreeds(data);
  fillSelectWithOptions(allBreeds);
}

fetch("https://dog.ceo/api/breeds/list/all")
  .then((headerRowData) => {
    return headerRowData.json();
  })
  .then((data) => {
    doJobAfterServerResponds(data);
  });
