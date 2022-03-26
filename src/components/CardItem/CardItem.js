import React from "react";

const CartItems = ({ item }) => {
  const { name } = item;
  return <p className='p-3 mb-2 bg-medium rounded shadow'>{name}</p>;
};

export default CartItems;
