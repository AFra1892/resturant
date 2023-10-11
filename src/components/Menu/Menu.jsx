import React from "react";
import './menu.css'
import MenuCard from "../MenuCard/MenuCard";

export default function Menu(){
    const [currentCat,setCurrentCat] = React.useState("pizza")

    const pizzaItems = [
        {name:"Peperoni Pizza" , price:"8.99$"},
        {name:"PineApple Pizza", price:"7.99$"},
        {name:"Chicken Pizza",price:"9.99$"}
        ]


    function handle(event){
        setCurrentCat(event.target.id)
        console.log(currentCat);
        }

    // const currentCatArray = currentCat + "Items"

    const elements = pizzaItems.map((item)=>{
            <MenuCard color={currentCat} name={item.name} price={item.price}/>
    })
      
    return(
        <div className="resturant__menu section__padding">
            <div className="resturant__menu-categories">
                <ul className="resturant__menu-categories_items">
                    <p><a id="pizza"  onClick={handle} >Pizza</a></p>
                    <p><a id="pasta" onClick={handle}>Pasta</a></p>
                    <p><a id="chicken" onClick={handle}>Chicken</a></p>
                    <p><a id="burgers" onClick={handle}>Burgers</a></p>
                    <p ><a id="sandwich" onClick={handle}>Sandwich</a></p>
                </ul>
            </div>
            <div className="resturant__menu-food">
                <h1>{currentCat}</h1>
                <MenuCard  price={pizzaItems[0].price} name={pizzaItems[0].name}/>
                <MenuCard  price={pizzaItems[1].price} name={pizzaItems[1].name}/>
               
            </div>
        </div>
    )
}