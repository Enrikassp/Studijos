export async function getAllCategories() {
  const categoriesPromise = await fetch(
    `https://srv10.vibelink.lt/server/api/categories`
  );
  const categories = await categoriesPromise.json();
  return categories;
}
