import {useState,useEffect} from 'react'
import axios from 'axios'
import MenuCard from './MenuCard'
import Navbar from '../../components/navbar/Navbar'
import ShoppingCard from '../ShoppingCard'
import { FaShoppingBag } from "react-icons/fa";

const Menu = () => {
    const orders = []
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
    
        <a href='/shoppingcard'><FaShoppingBag   size={50}/></a>
    
    <div className='flex'>
        <div className="">
                  <button 
                id="favorite-category"
                    onClick={()=>setCat("favorite")}
                    className=''
                >
                    Favorite ⭐ 
                </button> 
                <ul className="">
                <button 
                        onClick={()=>setCat("burger")}
                        className=''
                    >
                        Burger 🍔
                    </button>   
                    
                    
                    <button 
                        onClick={()=>setCat("nugget")}
                        className=''
                    >
                        Chicken 🍗
                    </button>
                   
                   
                    <button 
                        onClick={()=>setCat("drink")}
                        className=''
                    >
                        Drink 🍹
                    </button>
                </ul>
            </div>
        <MenuCard menu={menu} cat={cat} orders={orders} />
    </div>
    </>
  )
}

export default Menu