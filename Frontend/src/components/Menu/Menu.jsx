import React from "react";
import './menu.css'
import MenuCard from "./MenuCard";
import items from '../../data'

export default function Menu(){
    
    const [data,setData] = React.useState(items)
    const [filter,setFilter] = React.useState('burger')
    const [products,setProducts] = React.useState(data.burger)

    React.useEffect(()=>{
        if(filter === 'favorite'){
            setProducts(data.favorite)
        }
        
        if(filter === 'drink'){
            setProducts(data.drink)
        }
        if(filter === 'chicken'){
            setProducts(data.chicken)
        }
        if(filter === 'burger'){
            setProducts(data.burger)
        }
        if(filter === 'sandwich'){
            setProducts(data.sandwich)
        }
    },[filter])
    
    function menuItems(){
        const elements = []
        if(filter === "drink"){
            products.map((item,index)=>{
                elements.push(<MenuCard name={item.name} price={item.price} image={item.img}/>)

            })
            return elements
        }
      
        else if(filter === "chicken"){
            products.map((item,index)=>{
                elements.push(<MenuCard name={item.name} price={item.price} image={item.img}/>)

            })
            return elements
        }
        else if(filter === "burger"){
            products.map((item,index)=>{
                elements.push(<MenuCard name={item.name} price={item.price} image={item.img} />)
                

            })
            return elements
        }
        else if(filter === "sandwich"){
            products.map((item,index)=>{
                elements.push(<MenuCard name={item.name} price={item.price} image={item.img}/>)

            })
            return elements
        }
        else if(filter === "favorite"){
            products.map((item,index)=>{
                elements.push(<MenuCard name={item.name} price={item.price} image={item.img}/>)
                
            })
            return elements
        }
    }
    
    return(
        <div id="menu" className="resturant__menu section__padding">
            <div className="resturant__menu-categories">
                  <button 
                id="favorite-category"
                    onClick={()=>setFilter("favorite")}
                    className={`filter-btn ${filter === 'favorite' ? "active-btn" : "" }`}
                >
                    Favorite ⭐ 
                </button> 
                <ul className="resturant__menu-categories_items">
                <button 
                        onClick={()=>setFilter("burger")}
                        className={`filter-btn ${filter === 'burger' ? "active-btn" : "" }`}
                    >
                        Burger 🍔
                    </button>   
                    
                    
                    <button 
                        onClick={()=>setFilter("chicken")}
                        className={`filter-btn ${filter === 'chicken' ? "active-btn" : "" }`}
                    >
                        Chicken 🍗
                    </button>
                   
                    <button 
                        onClick={()=>setFilter("sandwich")}
                        className={`filter-btn ${filter === 'sandwich' ? "active-btn" : "" }`}
                    >
                        Sandwich 🥪
                    </button>
                    <button 
                        onClick={()=>setFilter("drink")}
                        className={`filter-btn ${filter === 'pizza' ? "active-btn" : "" }`}
                    >
                        Drink 🍹
                    </button>
                </ul>
            </div>
            <div className="resturant__menu-food">
            <h1>{filter}</h1>

                <div className="resturant__menu-food_items">
                    {menuItems()}
                </div>
            </div>
        </div>
    )
}