import {useState } from 'react'
import { BsInfoCircle } from 'react-icons/bs';
import { IoIosAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import '../../components/header/header.css'
const MenuSingleCard = ({ food,logedInUser }) => {
  const { enqueueSnackbar } = useSnackbar();

  const {name , orders} = logedInUser
    const addToOrder = ()=>{
      if(name ==null){
        enqueueSnackbar('Log in befor ordering', { variant: 'error' });

      }else{
      enqueueSnackbar('Added to Order List', { variant: 'success' });
      
        
      axios.put("http://localhost:5555/addItem", {
        
        data: {username:name,order:food}            
        })
      .then((res) => {
        console.log(res.data);      
      })
      .catch((err) => {
        console.log(err);
      })
    
      }
    }
    

  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl hover:bg-yellow-500'>
        <img src={food.imgUrl} alt='classicburger'/>
        <h2 className='my-1 text-gray-500'> title :  <span className='text-black'> {food.name}</span></h2>
        <h2 className='my-1 text-gray-500'> price :  <span className='text-black'> ${food.price} </span></h2>
        {/* <h2 className='my-1 text-gray-500'> category :  <span className='text-black'> {food.category}</span></h2> */}
        <h2 className='my-1 text-gray-500'> cal :  <span className='text-black'> {food.cal}</span></h2>
        
       
        <div className=' flex justify-between items-center'>
          <button className="bn632-hover bn28 " onClick={addToOrder}> Add To Cart </button> 
          <Link to={`/menu/${food._id}`}>
              <BsInfoCircle className='text-2xl text-red-600' />
          </Link>
        </div>
     
        
    </div>
  );
};

export default MenuSingleCard;
