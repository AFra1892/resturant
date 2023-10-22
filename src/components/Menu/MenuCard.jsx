import React from "react";
import './menucard.css'


export default function MenuCard(props){

    return(
        <div className="resturant__menucard">
            <div className="resturant__menucard-image">
                <img src={props.image}/>
                
            </div>
            <div  className="resturant__menucard-card">
                    <h3>{props.name}</h3>
                    <p>Ingridients</p>
                    <p>{props.price} $</p>
                    <button>Order Now</button> 
            </div>
        </div>
    )
}