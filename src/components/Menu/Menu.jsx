import React, { useEffect } from "react";
import './menu.css'
import MenuCard from "./MenuCard";
import cheezeBurger from '../../assets/burger/cheeze-burger.png'
import chickenBurger from '../../assets/burger/chicken-burger.png'
import mashromBurger from '../../assets/burger/mashrom-burger.png'
import ham from '../../assets/pizza/ham.png'
import vegtable from '../../assets/pizza/vegtable.png'
import tomato from '../../assets/pizza/tomato.png'
import pasta1 from '../../assets/pasta/pasta1.png'
import pasta2 from '../../assets/pasta/pasta2.png'
import pasta3 from '../../assets/pasta/pasta3.png'
import sandwich1 from '../../assets/sandwich/first-sandwich.png'
import sandwich2 from '../../assets/sandwich/second-sandwich.png'
import sandwich3 from '../../assets/sandwich/third-sandwich.png'
import chicken3 from '../../assets/chicken/3peace.png'
import chicken4 from '../../assets/chicken/4peace.png'
import chicken8 from '../../assets/chicken/8peace.png'



export default function Menu(){
    
    const [itemImage,setItemImage] = React.useState([cheezeBurger,chickenBurger,mashromBurger])
    const[pizzaImage,setPizzaImage] = React.useState([ham,tomato,vegtable])
    const[pastaImage,setPastaImage] = React.useState([pasta1,pasta2,pasta3])
    const[sandwichImage,setSandwichImage] = React.useState([sandwich1,sandwich2,sandwich3])
    const[chickenImage,setChickenImage] = React.useState([chicken3,chicken4,chicken8])

    const pizza = [ {name:"Peperoni Pizza" , price:"8.99$"},{name:"PineApple Pizza", price:"7.99$"},{name:"Chicken Pizza",price:"9.99$"}]
    const pasta = [{name:"alferedo" , price:"12.99"},{name:"begoenii" , price:"10.99"},{name:"bonapetito" , price:"15.99"}]
    const chicken = [{name:"6 peace strips" , price:"8.99"},{name:"8 peace strips" , price:"10.99"},{name:"10 peace strips" , price:"12.99"}]
    const burger = [{name:"cheeze burger" , price:"12.99" },{name:"chicken burger" , price:"10.99", img:{chickenBurger}},{name:"mashroom burger" , price:"15.99" , img:{mashromBurger}}]
    const sandwich = [{name:"hot dog" , price:"12.99"},{name:"meatloaf" , price:"10.99"},{name:"chicken sandwich" , price:"15.99"}]

    
    const [filter,setFilter] = React.useState('pizza')
    const [products,setProducts] = React.useState(pizza)

    React.useEffect(()=>{
        if(filter === 'pizza'){
            setProducts(pizza)
        }
        if(filter === 'pasta'){
            setProducts(pasta)
        }
        if(filter === 'chicken'){
            setProducts(chicken)
        }
        if(filter === 'burger'){
            setProducts(burger)
        }
        if(filter === 'sandwich'){
            setProducts(sandwich)
        }
    },[filter])
    
    function menuItems(){
        const elements = []
        if(filter === "pizza"){
            products.map((item,index)=>{
                elements.push(<MenuCard name={item.name} price={item.price} image={pizzaImage[index]}/>)

            })
            return elements
        }
        else if(filter === "pasta"){
            products.map((item,index)=>{
                elements.push(<MenuCard name={item.name} price={item.price} image={pastaImage[index]}/>)

            })
            return elements
        }
        else if(filter === "chicken"){
            products.map((item,index)=>{
                elements.push(<MenuCard name={item.name} price={item.price} image={chickenImage[index]}/>)

            })
            return elements
        }
        else if(filter === "burger"){
            products.map((item,index)=>{
                elements.push(<MenuCard name={item.name} price={item.price} image={itemImage[index]} />)
                

            })
            return elements
        }
        else if(filter === "sandwich"){
            products.map((item,index)=>{
                elements.push(<MenuCard name={item.name} price={item.price} image={sandwichImage[index]}/>)

            })
            return elements
        }
    }
    
    return(
        <div className="resturant__menu section__padding">
            <div className="resturant__menu-categories">
                <ul className="resturant__menu-categories_items">
                        {/* <p><a id="pizza"  onClick={handle} >Pizza 🍕</a></p>
                        <p><a id="pasta" onClick={handle}>Pasta 🍝</a></p>
                        <p><a id="chicken" onClick={handle}>Chicken 🍗</a></p>
                        <p><a id="burger" onClick={handle}>Burger 🍔</a></p>
                        <p><a id="sandwich" onClick={handle}>Sandwich 🥪</a></p>  */}
                    <button 
                        onClick={()=>setFilter("pizza")}
                        className={`filter-btn ${filter === 'pizza' ? "active-btn" : "" }`}
                    >
                        Pizza
                    </button>
                    <button 
                        onClick={()=>setFilter("pasta")}
                        className={`filter-btn ${filter === 'pasta' ? "active-btn" : "" }`}
                    >
                        Pasta
                    </button>
                    <button 
                        onClick={()=>setFilter("chicken")}
                        className={`filter-btn ${filter === 'chicken' ? "active-btn" : "" }`}
                    >
                        Chicken
                    </button>
                    <button 
                        onClick={()=>setFilter("burger")}
                        className={`filter-btn ${filter === 'burger' ? "active-btn" : "" }`}
                    >
                        Burger
                    </button>
                    <button 
                        onClick={()=>setFilter("sandwich")}
                        className={`filter-btn ${filter === 'sandwich' ? "active-btn" : "" }`}
                    >
                        Sandwich
                    </button>
                </ul>
            </div>
            <div className="resturant__menu-food">
                <h1>{currentCat}</h1>
                <div className="resturant__menu-food_items">
                    {menuItems()}
                </div>
            </div>
        </div>
    )
}