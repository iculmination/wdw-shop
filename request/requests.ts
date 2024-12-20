export async function getAllCategories() {
  const categoryRes = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  return categoryRes.json();
}

export async function getAllProducts() {
  const productsRes = await fetch("https://fakestoreapi.com/products");
  return productsRes.json();
}
