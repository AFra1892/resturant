import React , { useState } from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import './cart.css'
import {Link} from 'react-router-dom'
export const CartItem = ({order,logedInUser}) =>{
  const {name} = logedInUser
    const {_id  ,price , imgUrl}  = order;
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
      
        <div className="cartItem bg-white  w-full sm:w-2/5">
          <img className="sm:mr-8 mr-0" src={imgUrl} />
          <div className="description">
          <h1 className='font-black sm:text-3xl text-xl my-4'>{order.name}</h1>
            <p className="text-lg sm:text-2xl"> Price: ${totPrice}</p>
            <div className="countHandler">
              <button onClick={handleDecrease} className="text-lg sm:text-2xl" > - </button>
              <input
                value={count}
                className="text-lg sm:text-2xl"
                />
              <button onClick={handleIncrease} className="text-lg sm:text-2xl" > + </button>
            </div>

          </div>
          <Link to={`/cart/user/${name}/delete/${_id}`}>
              <IoIosRemoveCircleOutline className="ml-4" size={40} color="red" />
          </Link>
          
        </div>
        
      
      );
}
