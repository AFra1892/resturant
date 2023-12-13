import React, { useState } from "react";
import { CartItem } from "./cart/cart-item";

export const Cart = ({logedInUser})=>{
    const {name} = logedInUser
    const [testOrder , setTestOrder] = useState([])
    async function loginUser(event){
        event.preventDefault()   
        const response = await fetch('http://localhost:5555/logeduserorders',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name}), //inaro mifrestim backend
    })
    const data = await response.json()
    setTestOrder(data.orders)
    }   
    return(
        <div>
            <button onClick={loginUser}  type="submit">Show Orders</button>
            <h1>{logedInUser.name} This is your current Order:</h1>
            {testOrder.map((order)=>{
                return <CartItem logedInUser={logedInUser} order={order}/>
            })}
        </div>
    );

}