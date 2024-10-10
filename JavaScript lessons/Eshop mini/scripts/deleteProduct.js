function deleteProduct(index) {
  const confirmation = confirm("Ar tikrai norite pašalinti ši produktą?");

  if (confirmation) {
    products.splice(index, 1);
    updateHtmlTable(products);
    localStorage.setItem("products", JSON.stringify(products));
  }
}
