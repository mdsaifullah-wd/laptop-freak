import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <main className='grid grid-cols-3 gap-8 p-10'>
      <div className='product-container col-span-2 grid grid-cols-3 gap-6'>
        {products.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </div>
      <div className='shopping-cart'></div>
    </main>
  );
};

export default Shop;
