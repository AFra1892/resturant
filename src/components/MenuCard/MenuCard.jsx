import React from "react";
import './menucard.css'

export default function MenuCard(props){
    // function setColor(){
    //     if(props.color === "pasta"){
    //         return 'green'
    //     }
    //     else if(props.color === "burgers"){
    //         return 'orange'
    //     }
    // }
    // const styles = {
    //     backgroundColor : setColor()
    // }
    return(
        <div className="resturant__menucard">
            <div  className="resturant__menucard-card">
               
                    <p>{props.name}</p>
                    <p>{props.price}</p>
                
            </div>
        </div>
    )
}