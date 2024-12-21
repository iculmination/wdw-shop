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

export async function getProduct(id: number) {
  const productRes = await fetch(`https://fakestoreapi.com/products/${id}`);
  return productRes.json();
}

export async function getProductByCategory(category: string) {
  const productsRes = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return productsRes.json();
}
