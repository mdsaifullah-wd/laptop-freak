import React from "react";

const Item = ({ item }) => {
  const { name } = item;
  return <p>{name}</p>;
};

export default Item;
