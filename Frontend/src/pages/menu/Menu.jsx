import {useState,useEffect} from 'react'
import axios from 'axios'
import './shop.css'
import MenuSingleCard from './MenuSingleCard';

const Menu = ({logedInUser}) => {
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
        {/* <MenuCard menu={menu} cat={cat}/> */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {menu.map((item) => {
        if(item.category === cat){
            return <MenuSingleCard key={item._id} food={item} logedInUser={logedInUser} />
        }
      }
        
        
      )}
    </div>
    </div>
    
    </>
  )
}

export default Menu