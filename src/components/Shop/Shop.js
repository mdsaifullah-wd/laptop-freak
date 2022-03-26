import React, { useEffect, useState } from "react";
import CartItem from "../CardItem/CardItem";
import Product from "../Product/Product";

const Shop = () => {
  // useState hooks
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [randomCartIndex, setRandomCartIndex] = useState(-1);

  //   event handlers
  const handleAddToCart = (product) => {
    !cart.includes(product) && cart.length < 4 && setCart([...cart, product]);
  };
  const handleClearCart = (product) => {
    setCart([]);
  };
  const handleChooseOne = () => {
    setRandomCartIndex(Math.floor(Math.random() * cart.length));
  };

  // useEffect
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <main className='grid md:grid-cols-3 gap-8 p-10'>
      {/* Product Container */}
      <div className='md:col-span-2 grid md:grid-cols-3 gap-6'>
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAdToCart={handleAddToCart}></Product>
        ))}
      </div>

      {/* Cart Container */}
      <div className='shopping-cart bg-light p-6 pt-8 sticky top-0'>
        <div>
          <div className='w-full md:relative md:h-96'>
            {/* Selected products */}
            <div className='w-4/5 mx-auto mb-10'>
              {cart.map((item) => (
                <CartItem item={item} key={item.id}></CartItem>
              ))}
            </div>
            {/* Buttons */}
            <div className='md:absolute md:bottom-0 md:left-0 md:right-0'>
              <button
                onClick={handleChooseOne}
                className='w-3/4 mx-auto py-2 bg-green hover:bg-primary text-white hover:text-dark rounded-lg font-medium flex justify-center items-center'>
                Choose One
              </button>
              <button
                onClick={handleClearCart}
                className='w-3/4 mx-auto mt-10 py-2 bg-dark hover:bg-primary text-white hover:text-dark rounded-lg font-medium flex justify-center items-center'>
                Choose Again
              </button>
            </div>
          </div>
          {/* Results */}
          <div className='w-4/5 mx-auto mt-10'>
            <h3 className='text-center text-2xl font-bold mb-5'>Result</h3>
            <p className='p-3 mb-2 bg-medium rounded shadow'>
              {cart[randomCartIndex]?.name}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
