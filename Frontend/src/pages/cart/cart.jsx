import React, {useState } from "react";
import { CartItem } from "./cart-item";


export const Cart = ({logedInUser})=>{

    const [isShown, setIsShown] = useState(false)
    const {name} = logedInUser
    const [testOrder , setTestOrder] = useState([])
    

    
    async function showOrders(event){
        event.preventDefault()   
        const response = await fetch('http://localhost:5555/users/api/show/orders',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name}), //inaro mifrestim backend
    })
    const data = await response.json()
    setTestOrder(data.orders)
    setIsShown(true)
    }
   
    return(
        <div  className="flex flex-col  justify-center items-center sm:flex-row bg-yellow-500 py-8">
        {!isShown 
        ? <button className="bg-red-500 p-4 text-lg mr-4" onClick={showOrders}  type="submit">Show Orders</button>
        :
        <>
        <div className="bg-yellow-500 h-auto pb-16 flex flex-col w-3/4 mr-12">
            <div className="w-screen flex flex-row justify-between pr-24">
                <h1 className="text-4xl text-white font-bold">{logedInUser.name} This is your current Order:</h1>
                <a href="/menu"><button class="bn632-hover bn28 ">Back to Menu</button></a>
            </div> 
            {testOrder.map((order)=>{
                return <CartItem logedInUser={logedInUser} order={order} length={testOrder.length}/>
            })}
            
        </div>
        <div className=" flex flex-col justify-center w-auto bg-yello-500">
                <h1 className="text-white text-2xl mb-8">Review Order({testOrder.length})</h1>
                <hr className="w-2/5 sm:3/5"/>
                <p className="text-gray-200 text-lg">Pickup method</p>
                <p className="text-white text-xl">In store</p>

            </div>
        </>
 } 
        </div>
    );

}