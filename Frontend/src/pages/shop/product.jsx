import React, { useContext } from "react";
import { OrderContext } from "../../context/order-context";

export const Product = (props) => {
  const { idd, name, price, imgUrl } = props.data;
  const { addToCart, cartItems } = useContext(OrderContext);

  const cartItemCount = cartItems[idd];

  return (
    <div className="product">
      <img src={imgUrl} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(idd)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
