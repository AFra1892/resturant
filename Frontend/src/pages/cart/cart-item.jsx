import React , { useContext } from "react";
import { OrderContext } from "../../context/order-context";

export const CartItem = (props) =>{
    const {id , name , price , imgUrl}  = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(OrderContext);
    return (
        <div className="cartItem">
          <img src={imgUrl} />
          <div className="description">
            <p>
              <b>{name}</b>
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
}