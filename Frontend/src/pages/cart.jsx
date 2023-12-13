import React, { useContext } from "react";
import { ShareContext } from "../context/share-context";

export const Cart = ()=>{

    const {tokenn} = useContext(ShareContext);
    console.log(`this is tokenn from useContext ${tokenn}`);
    
    
    return(
        <div>
            {tokenn} This is your current Order:
        </div>
    );

}