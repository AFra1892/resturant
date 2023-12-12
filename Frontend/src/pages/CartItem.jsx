import React, { useContext } from "react";
import { ShContext } from "../context/ShopContext";

export const CartItem = (props) => {
  const { id, productName, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =useContext(ShContext);

  return (
    <div className="cartItem">
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};