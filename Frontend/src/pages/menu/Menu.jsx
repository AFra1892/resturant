import {useState,useEffect} from 'react'
import axios from 'axios'
import MenuCard from './MenuCard'
import Navbar from '../../components/navbar/Navbar'
const Menu = () => {

    const [menu,setMenu] = useState([])
    const [cat,setCat] = useState('burger')

    useEffect(()=>{
        axios
            .get('http://localhost:5555/foods')
            .then((res)=>{
                setMenu(res.data.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    },[])

  return (
    <>
    <Navbar/>
    <div className='flex'>
        <div className="resturant__menu-categories">
                  <button 
                id="favorite-category"
                    onClick={()=>setCat("favorite")}
                    className={`filter-btn ${cat === 'favorite' ? "active-btn" : "" }`}
                >
                    Favorite ⭐ 
                </button> 
                <ul className="resturant__menu-categories_items">
                <button 
                        onClick={()=>setCat("burger")}
                        className={`filter-btn ${cat === 'burger' ? "active-btn" : "" }`}
                    >
                        Burger 🍔
                    </button>   
                    
                    
                    <button 
                        onClick={()=>setCat("nugget")}
                        className={`filter-btn ${cat === 'nugget' ? "active-btn" : "" }`}
                    >
                        Chicken 🍗
                    </button>
                   
                   
                    <button 
                        onClick={()=>setCat("drink")}
                        className={`filter-btn ${cat === 'pizza' ? "active-btn" : "" }`}
                    >
                        Drink 🍹
                    </button>
                </ul>
            </div>
        <MenuCard menu={menu} cat={cat} />
    </div>
    </>
  )
}

export default Menu