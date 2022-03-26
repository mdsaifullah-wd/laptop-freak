import React, { useEffect, useState } from "react";
import CartItems from "../Item/Item";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [randomCartIndex, setRandomCartIndex] = useState(-1);
  console.log(cart.length);
  const handleAddToCart = (product) => {
    !cart.includes(product) && cart.length < 4 && setCart([...cart, product]);
  };
  const handleClearCart = (product) => {
    setCart([]);
  };
  const handleChooseOne = () => {
    setRandomCartIndex(Math.floor(Math.random() * cart.length));
  };
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <main className='grid grid-cols-3 gap-8 p-10'>
      <div className='product-container col-span-2 grid grid-cols-3 gap-6'>
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAdToCart={handleAddToCart}></Product>
        ))}
      </div>
      <div className='shopping-cart'>
        <div>
          {cart.map((item) => (
            <CartItems item={item} key={item.id}></CartItems>
          ))}
          <button
            onClick={handleChooseOne}
            className='w-full py-2 bg-dark hover:bg-primary text-white hover:text-dark rounded-lg font-medium flex justify-center items-center'>
            Choose One
          </button>
          <button
            onClick={handleClearCart}
            className='mt-10 py-2 bg-dark hover:bg-primary text-white hover:text-dark rounded-lg font-medium flex justify-center items-center'>
            Choose Again
          </button>
          <br />
          <br />
          <p>Item is: {cart[randomCartIndex]?.name}</p>
        </div>
      </div>
    </main>
  );
};

export default Shop;
