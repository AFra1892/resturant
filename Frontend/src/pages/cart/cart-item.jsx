import React , { useState } from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import axios from "axios";
import './cart.css'
export const CartItem = ({order,logedInUser}) =>{
  const {namee} = logedInUser
    const { idd, name , price , imgUrl}  = order;
    const [count, setCount] = useState(1);
    const [totPrice , setTotPrice] = useState(price)

    //kar nemikone
    // const removeFromOrder = ()=>{
    //   alert('item deleted from order list')
      
        
    //   axios.put("http://localhost:5555/deleteItem", {
        
    //     data: {username:namee,order:order}            
    //     })
    //   .then((res) => {
    //     console.log(res.data);      
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    
    
    // }

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
          <IoIosRemoveCircleOutline  size={40} color="red" />
          
        </div>
      );
}