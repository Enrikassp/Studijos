function addProduct() {
  const productTitle = document.querySelector("#title");
  const productDescription = document.querySelector("#description");
  const productPrice = document.querySelector("#price");
  const productDiscount = document.querySelector("#discount");
  const productCount = document.querySelector("#count");
  const productBrand = document.querySelector("#brand");
  const productCategory = document.querySelector("#category");

  const newProduct = {
    title: productTitle.value,
    description: productDescription.value,
    price: +productPrice.value,
    discount: +productDiscount.value,
    stock: +productCount.value,
    brand: productBrand.value,
    category: productCategory.value,
  };

  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
  updateHtmlTable(products);
}
