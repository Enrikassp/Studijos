export default class ProductRepository {
  static allProducts;

  static async getAllProducts() {
    const productsPromise = await fetch(
      `https://srv10.vibelink.lt/server/api/products`
    );
    const products = await productsPromise.json();
    return products;
  }

  static async getProduct(id) {
    const productPromise = await fetch(
      `https://srv10.vibelink.lt/server/api/products/${id}`
    );
    const product = await productPromise.json();
    return product;
  }

  static async addNewProduct(product) {
    const promise = await fetch(
      `https://srv10.vibelink.lt/server/api/products/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );

    const response = await promise.json();
    return response;
  }
}
ProductRepository.allProducts = await ProductRepository.getAllProducts();
