const productTitleInput = document.querySelector("#editTitle");
const productPriceInput = document.querySelector("#editPrice");
const productDescriptionInput = document.querySelector("#editDescription");
const productDiscountInput = document.querySelector("#editDiscount");
const productCountInput = document.querySelector("#editCount");
const productBrandInput = document.querySelector("#editBrand");
const productCategoryInput = document.querySelector("#editCategory");

function openModal(index) {
  nowUpdatingProductIndex = index;
  const modalContainer = document.querySelector("#editingModal");
  modalContainer.showModal();
  fillUpdateInputsWithData();
}

function closeModal() {
  const modalContainer = document.querySelector("#editingModal");
  modalContainer.close();
}

function fillUpdateInputsWithData() {
  console.log(nowUpdatingProductIndex);
  const product = products[nowUpdatingProductIndex];

  productTitleInput.value = product.title;
  productPriceInput.value = product.price;
  productDescriptionInput.value = product.description;
  productDiscountInput.value = product.discount;
  productCountInput.value = product.stock;
  productBrandInput.value = product.brand;
  productCategoryInput.value = product.category;
}

function updateProduct() {
  const product = {
    title: productTitleInput.value,
    price: +productPriceInput.value,
    description: productDescriptionInput.value,
    discount: +productDiscountInput.value,
    stock: +productCountInput.value,
    brand: productBrandInput.value,
    category: productCategoryInput.value,
  };

  products[nowUpdatingProductIndex] = product;
  localStorage.setItem("products", JSON.stringify(products));
  updateHtmlTable(products);
  closeModal();
  nowUpdatingProductIndex = undefined;
}
