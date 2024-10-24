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
   <div
        class="p-2 d-flex align-items-center shadow-sm p-3 mb-5 bg-white rounded"
      >
        <img src="${book.img}" width="250" class="px-5" />

        <article class="">
          <h5 class="w-5">${book.title}</h5>
          <h5>${book.author}</h5>
          <p>Kategorija: ${bookTypeTitle}</p>
          <p>Data: ${new Date(book.time * 1000).toLocaleDateString()}</p>
        </article>

        <div class="p-5 flex-shrink-1 ms-auto text-center">
          <p class="fs-3">${book.price}€</p>
          <button type="button" class="btn btn-primary">Pridėti į krepšelį</button>
        </div>
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
  let optionHtml = `<option selected value="default">Pasirinkite knygos tipa</option>`;

  for (const type of types) {
    optionHtml += `<option value="${type.id}">${type.title}</option>`;
  }

  selection.innerHTML = optionHtml;
}

function filterByOption() {
  const selectedValue = document.querySelector("#selection").value;
  if (selectedValue === "default") {
    setupBooksOnHtml(currentBooks, currentTypes);
  }
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
