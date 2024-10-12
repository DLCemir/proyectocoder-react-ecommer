import React from "react";
import cart from "../assets/cart.svg";

const CartWidget = () => {
  return (
    <>
      <img src={cart} alt="cart" style={{ width: 40 }} />
      <h2>
        <span>0</span>
      </h2>
    </>
  );
};

export default CartWidget;
