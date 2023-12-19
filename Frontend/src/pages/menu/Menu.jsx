import {useState,useEffect} from 'react'
import axios from 'axios'
import './shop.css'
import MenuSingleCard from './MenuSingleCard';
import CustomNav from '../../components/navbar/CustomNav';

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
    <CustomNav/>
    <div className='flex p-12 sm:flex-row flex-col gap-12'>
        <div className=" flex sm:flex-col flex-row gap-12">
                   
                <ul className="flex sm:flex-col flex-row gap-12 ">
                <button 
                        onClick={()=>setCat("burger")}
                        className='border-2 border-red-500 sm:p-6 p-4 sm:text-2x text-lg'
                    >
                        Burger 🍔
                    </button>   
                    
                    
                    <button 
                        onClick={()=>setCat("nugget")}
                        className='border-2 border-red-500 sm:p-6 p-4 sm:text-2x text-lg'
                    >
                        Chicken 🍗
                    </button>
                   
                   
                    <button 
                        onClick={()=>setCat("drink")}
                        className='border-2 border-red-500 sm:p-6 p-4 sm:text-2x text-lg'
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