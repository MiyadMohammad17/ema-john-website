import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCart = getShoppingCart();
    const saveCart = [];

    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
      // console.log("added product", addedProduct);
    }
    setcart(saveCart)
  }, [products]);

  const handleAllCart = (product) => {
    const newCart = [...cart, product];
    setcart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="product-cont">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAllCart={handleAllCart} >{" "}</Product>
        ))}
      </div>
      <div className="cart-cont">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
