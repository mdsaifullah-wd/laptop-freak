import React from "react";

const CartItems = ({ item }) => {
  const { name } = item;
  return <p>{name}</p>;
};

export default CartItems;
