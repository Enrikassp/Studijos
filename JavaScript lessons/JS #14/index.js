const currentBooks = [];
const currentTypes = [];

async function main() {
  const booksAndTypes = await getBooksAndBookTypesFromApi();
  const books = booksAndTypes.books;
  const types = booksAndTypes.types;
  console.log(books, types);

  setupBooksOnHtml(books, types);
  setupOptionSelects(types);
  currentBooks.push(...books);
  currentTypes.push(...types);
}

main();

function setupBooksOnHtml(bookData, bookTypes) {
  let bookList = document.querySelector(".bookList");
  let html = ``;

  const bookTypeMap = typeMap(bookTypes);

  for (const book of bookData) {
    const bookTypeTitle = bookTypeMap[book.type] || "Nežinomas";

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
          book.time * 1000
        ).toLocaleDateString()}</p> <!-- Format date for better readability -->

        <h2>${book.price}€</h2>
      </div>
    `;
  }

  bookList.innerHTML = html;
}

function typeMap(bookTypes) {
  const typeMap = {};
  for (const type of bookTypes) {
    typeMap[type.id] = type.title;
  }

  return typeMap;
}

function searchForABook() {
  const inputValue = document.querySelector("#search").value;

  const filteredBooks = searchBooks(currentBooks, inputValue);
  setupBooksOnHtml(filteredBooks, currentTypes);
}

function searchBooks(books, searchQuery) {
  const query = searchQuery.toLowerCase();
  const bookTypeMap = typeMap(currentTypes);

  return books.filter((book) => {
    const bookTypeTitle = bookTypeMap[book.type] || "Nežinomas";
    const titleMatch = book.title.toLowerCase().includes(query);
    const authorMatch = book.author.toLowerCase().includes(query);
    const typeMatch = bookTypeTitle.toLowerCase().includes(query);

    return titleMatch || authorMatch || typeMatch;
  });
}

function setupOptionSelects(types) {
  const selection = document.querySelector("#selection");
  let optionHtml = ``;

  for (const type of types) {
    optionHtml += `<option value="${type.id}">${type.title}</option>`;
  }

  selection.innerHTML = optionHtml;
}

function filterByOption() {
  const selectedValue = document.querySelector("#selection").value;
  const filteredBooks = filterByOptionFunction(currentBooks, selectedValue);

  setupBooksOnHtml(filteredBooks, currentTypes);
}

function filterByOptionFunction(books, option) {
  const bookTypeMap = typeMap(currentTypes);

  return books.filter((book) => {
    const bookTypeTitle = bookTypeMap[book.type] || "Nežinomas";
    const optionToTitle = bookTypeMap[option].toLowerCase();
    const typeMatch = bookTypeTitle.toLowerCase().includes(optionToTitle);

    return typeMatch;
  });
}
