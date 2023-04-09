const CartLoader = async () => {
  const loaderProducts = await fetch("products.json");
  const products = await loaderProducts.json();
  console.log(products);
  return products;
};
export default CartLoader;
