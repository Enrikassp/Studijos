function createHtmlProductsTable(products = products) {
  let htmlCode = "";

  for (const index in products) {
    const product = products[index];
    htmlCode += `
    <tr>
        <td class="flex justify-around text-xl cursor-pointer">${deleteIcon(
          index
        )} ${updateIcon(index)}</td>
        <td>${product.title}</td>
        <td>${product.description.slice(0, 15)}...</td>
        <td>${product.stock}</td>
        <td>${product.price}€</td>
        <td>${product.brand}</td>
        <td>${product.category}</td>
    </tr>
    `;
  }

  return htmlCode;
}

function updateHtmlTable(products = products) {
  const htmlCode = createHtmlProductsTable(products);
  const tBodyElement = document.getElementById("productTable");
  tBodyElement.innerHTML = htmlCode;
}
