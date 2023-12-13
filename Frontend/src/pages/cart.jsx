import React, { useContext } from "react";
import { ShareContext } from "../context/share-context";
import { CartItem } from "./cart/cart-item";
export const Cart = ({logedInUser})=>{

    
    
    return(
        <div>
            <h1>{logedInUser.name} This is your current Order:</h1>
            {logedInUser.orders.map((order)=>{
                return <CartItem imgUrl={order.imgUrl} name={order.name} price={order.price}/>
            })}
        </div>
    );

}