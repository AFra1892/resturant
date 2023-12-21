import React, { useEffect, useState } from "react";
import { CartItem } from "./cart/cart-item";
import axios from "axios";

export const Cart = ({logedInUser})=>{


    const {name} = logedInUser
    const [testOrder , setTestOrder] = useState([])

    
    
    async function showOrders(event){
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
    <div  className="flex flex-col  justify-center items-center sm:flex-row bg-green-700 py-8">
        <div className="bg-green-700 h-auto pb-16 flex flex-col w-3/4 mr-12">
            <button onClick={showOrders}  type="submit">Show Orders</button>
            <h1 className="text-4xl text-white font-bold">{logedInUser.name} This is your current Order:</h1>
            {testOrder.map((order)=>{
                return <CartItem logedInUser={logedInUser} order={order} length={testOrder.length}/>
            })}
            
        </div>
        <div className=" flex flex-col justify-center w-auto bg-green-700">
                <h1 className="text-white text-2xl mb-8">Review Order({testOrder.length})</h1>
                <hr className="w-2/5 sm:3/5"/>
                <p className="text-gray-200 text-lg">Pickup method</p>
                <p className="text-white text-xl">In store</p>
            </div>
        </div>
    );

}