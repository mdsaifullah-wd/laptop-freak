import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Product = ({ product }) => {
  const { img, name, price } = product;
  return (
    <div className='p-2 shadow-lg rounded-lg'>
      <img src={img} alt='' className='w-full rounded-lg' />
      <div className='my-4'>
        <h3 className='text-2xl font-bold'>{name}</h3>
        <p className='text-lg'>Price: ${price}</p>
      </div>
      <button className='w-full py-2 bg-dark hover:bg-primary text-white hover:text-dark rounded-lg font-medium flex justify-center items-center'>
        <p className='mr-3'>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
