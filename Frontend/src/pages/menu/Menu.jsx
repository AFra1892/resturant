import {useState,useEffect} from 'react'
import axios from 'axios'
import './shop.css'
import MenuSingleCard from './MenuSingleCard';
import CustomNav from '../../components/navbar/CustomNav';
import Spinner from '../../components/Spinner';


const Menu = ({logedInUser}) => {
    const [menu,setMenu] = useState([])
    const [cat,setCat] = useState('burger')
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        axios
            .get('http://localhost:5555/foods')
            .then((res)=>{
                setMenu(res.data.data)
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error);
                setLoading(false)
            })
    },[])

    
  return (
    <>
    <CustomNav/>
    {loading ? <Spinner/> : (

    
    <div className='bg-green-700 flex p-12 sm:flex-row flex-col gap-12'>
        <div className=" flex sm:flex-col flex-row gap-12">
                   
                <ul className="flex sm:flex-col flex-row gap-12 ">
                <button 
                        onClick={()=>setCat("burger")}
                        className=' bg-white hover:bg-yellow-500 border-2 border-yellow-500 sm:p-6 p-4 sm:text-2x text-lg'
                    >
                        Burger 🍔
                    </button>   
                    
                    
                    <button 
                        onClick={()=>setCat("nugget")}
                        className='bg-white hover:bg-yellow-500 border-2 border-yellow-500 sm:p-6 p-4 sm:text-2x text-lg'
                    >
                        Chicken 🍗
                    </button>
                   
                   
                    <button 
                        onClick={()=>setCat("drink")}
                        className='bg-white hover:bg-yellow-500 border-2 border-yellow-500 sm:p-6 p-4 sm:text-2x text-lg'
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
    )}
    </>
  )
}

export default Menu