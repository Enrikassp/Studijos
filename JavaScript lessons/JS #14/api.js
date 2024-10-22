async function getBooksFromApi() {
  const promise = await fetch("https://in3.dev/knygos/");
  const response = await promise.json();

  return response;
}

async function getBookTypesFromApi() {
  const promise = await fetch("https://in3.dev/knygos/types/");
  const response = await promise.json();

  return response;
}

async function getBooksAndBookTypesFromApi() {
  const promises = await Promise.all([
    getBooksFromApi(),
    getBookTypesFromApi(),
  ]);

  return { books: promises[0], types: promises[1] };
}
