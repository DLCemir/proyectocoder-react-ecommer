import React from "react";
import "../styles/ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h1>{greeting}</h1>
      <h2>{"Bienvenidos a la tienda de abarrotes"}</h2>
    </>
  );
};

export default ItemListContainer;
