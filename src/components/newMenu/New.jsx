// import React from 'react'
// import data from './data'
// import './new.css'
// import { Category } from './Category'
// import MenuCard from '../Menu/MenuCard'

// const New = () => {
//   //storing the data in state
//   const [items,setItems] = React.useState(data[1])
//     const [activeCategory,setActiveCategory] = React.useState("")
//     const [categories,setCategories] = React.useState(["burger","sandwitch","drink","chicken"])


// const newarray = items.map((item)=>{
//   return(
//     <MenuCard key={item.id} name={item.name} price={item.price} image={item.img}/>
//   )  
// })




// const filterItems = (category) =>{
//   setActiveCategory(category);
  
// }
//     return (
//      <div id="menu" className="resturant__menu section__padding">
//         <div className="resturant__menu-categories">
//           <ul className="resturant__menu-categories_items">
//             <Category categories={categories} activeCategory={activeCategory} filterItems={filterItems}/>
//           </ul>
//         </div>
//         <div className="resturant__menu-food">

//                 <div className="resturant__menu-food_items">
//                     {newarray}
//                 </div>
//         </div>
//      </div>
    
//   )
// }

// export default New
import React, { useState } from "react";
import Menu2 from "./Menu2";
import Categories from "../newMenu/Category";
import items from "./data";
import './new.css'

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu2 items={menuItems} />
      </section>
    </main>
  );
};

export default App;