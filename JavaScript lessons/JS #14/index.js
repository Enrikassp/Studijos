async function getBooksFromApi() {
  const promise = await fetch("https://in3.dev/knygos/");
  const data = await promise.json();

  setupBooksOnHtml(data);
}

async function getBookTypesFromApi() {
  const promise = await fetch("https://in3.dev/knygos/types/");
  const data = await promise.json();
  return data;
}

async function setupBooksOnHtml(bookData) {
  let bookList = document.querySelector(".bookList");
  let html = ``;

  const bookTypes = await getBookTypesFromApi();

  const typeMap = {};
  for (const type of bookTypes) {
    typeMap[type.id] = type.title;
  }

  for (const book of bookData) {
    const bookTypeTitle = typeMap[book.type] || "Nežinomas";

    html += `  
    <div class="p-2 w-25 d-flex flex-column align-items-center">
        <img
          src="${book.img}"
          height="200"
        />

        <h5 class="w-5">
          ${book.title}
        </h5>

        <h3>${book.author}</h3>
        <h6>${bookTypeTitle}</h6>
        <p>${new Date(
          book.time
        ).toLocaleDateString()}</p> <!-- Format date for better readability -->

        <h2>${book.price}€</h2>
      </div>
    `;
  }

  bookList.innerHTML = html;
}

getBooksFromApi();
