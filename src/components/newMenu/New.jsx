import React from 'react'
import data from './data'
import './new.css'

const New = () => {
    //storing the data in state
    const [items,setItems] = React.useState(data)
    const allCategories = ["all" , items.map((item)=>item.category)]
  console.log(allCategories);
    return (
    <>
    <div className="resturant__menu-food_items">
    {/* looping though data */}
    {items.map((item)=>{
        return(
    <div className="resturant__menucard">
        <div className="resturant__menucard-image">
          <img src={item.img}/> 
        </div>
        <div  className="resturant__menucard-card">
              <h3>{item.name}</h3>
              <p>Ingridients</p>
              <p>{item.price} </p>
              <button>Order Now</button> 
        </div>
    </div>)  
    })}
    </div>
    </>
  )
}

export default New