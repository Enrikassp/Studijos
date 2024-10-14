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

generateProducts();
function generateProducts() {
  const productsJSON = localStorage.getItem("products");
  const products = productsJSON === null ? [] : JSON.parse(productsJSON);

  for (const index in products) {
    const product = products[index];

    console.log(product.discount);
    product.discount > 0
      ? generateProduct(product, true)
      : generateProduct(product, false);
  }
}

function generateProduct(product, isWithDiscount = false) {
  const productsHtml = document.querySelector(".products");
  let html = "";
  isWithDiscount
    ? (html += generateProductWithDiscount(product))
    : (html += generateProductWithoutDiscount(product));

  productsHtml.innerHTML += html;
}

function generateProductWithDiscount(product) {
  let productHtml = `
      <div class="product">
      <hr />

      <div class="product-details">
        <div class="image">
          <img
            src="https://placehold.co/200x200"
            alt="Produkto nuotrauka"
          />

          <span class="discount">-${product.discount}%</span>
        </div>
        <div class="details">
          <h4>${product.title}</h4>

          <p>
            ${product.description}
          </p>
        </div>
        <div class="price-and-actions">
          <div class="price-with-discount">
            <span class="discounted">${calculateRemainingPrice(
              product.price,
              product.discount
            )}€</span>
            <span class="old-price">${product.price}€</span>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  `;

  return productHtml;
}
function generateProductWithoutDiscount(product) {
  let productHtml = `
      <div class="product">
      <hr />

      <div class="product-details">
        <div class="image">
          <img
            src="https://placehold.co/200x200"
            alt="Produkto nuotrauka"
          />

        </div>
        <div class="details">
          <h4>${product.title}</h4>

          <p>
           ${product.description}
          </p>
        </div>
        <div class="price-and-actions">
          <div class="price">${product.price}€</div>


          <button>Add to cart</button>
        </div>
      </div>
    </div>
  `;
  return productHtml;
}

function calculateRemainingPrice(productPrice, discountPercentage) {
  let remainingPrice = productPrice * (1 - discountPercentage / 100);
  return remainingPrice;
}
