function getAllBreeds(data) {
  const allBreedsWithArrays = data.message;
  const breeds = Object.keys(data.message);
  const allBreeds = [];

  for (const breed of breeds) {
    const subBreeds = allBreedsWithArrays[breed];

    if (subBreeds.length > 0) {
      for (const subBreed of subBreeds) {
        const fullBreedName = `${breed} ${subBreed}`;
        allBreeds.push(fullBreedName);
      }
    } else {
      allBreeds.push(`${breed}`);
    }
  }

  return allBreeds;
}
