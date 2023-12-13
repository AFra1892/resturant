import React , { useContext } from "react";
import { OrderContext } from "../../context/order-context";

export const CartItem = (props) =>{
    const {idd , name , price , imgUrl}  = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(OrderContext);
    return (
        <div className="cartItem">
          <img src={imgUrl} />
          <div className="description">
            <p>
              <b>{cartItems[`${idd}`]}</b>
            </p>
            <p> Price: ${price}</p>
            <div className="countHandler">
              <button onClick={() => removeFromCart(idd)}> - </button>
              <input
                value={cartItems[idd]}
                onChange={(e) => updateCartItemCount(Number(e.target.value), idd)}
              />
              <button onClick={() => addToCart(idd)}> + </button>
            </div>
          </div>
        </div>
      );
}