import React , { useState } from "react";
import { OrderContext } from "../../context/order-context";
import './cart.css'
export const CartItem = (props) =>{
    const { idd, name , price , imgUrl}  = props;
    const [count, setCount] = useState(1);
    const [totPrice , setTotPrice] = useState(price)
    const handleIncrease = () => {
      setCount(count + 1);
      setTotPrice(totPrice+price)
    };
  
    const handleDecrease = () => {
      setCount(count - 1);
      setTotPrice(totPrice-price)
    };
    return (
        <div className="cartItem">
          <img src={imgUrl} />
          <div className="description">
            <p> Price: ${totPrice}</p>
            <div className="countHandler">
              <button onClick={handleDecrease} > - </button>
              <input
                value={count}
                
              />
              <button onClick={handleIncrease} > + </button>
            </div>
          </div>
        </div>
      );
}