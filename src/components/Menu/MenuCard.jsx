import React from "react";
import './menucard.css'


export default function MenuCard(props){

    return(
        <div className="resturant__menucard">
            <div className="resturant__menucard-image">
                <img src={props.image} alt="food"/>
                
            </div>
            <div  className="resturant__menucard-card">
                    <h3>{props.name}</h3>
                    <p>Ingridients</p>
                    <p>{props.price}</p>
                    <button><a href="/menu/chicken">Order Now</a></button> 
            </div>
        </div>
    )
}