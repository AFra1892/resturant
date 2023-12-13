import {useState } from 'react'
import { BsInfoCircle } from 'react-icons/bs';
import { IoIosAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom';

const MenuSingleCard = ({ food,logedInUser }) => {
    
  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
      <h1>This is {logedInUser.name}</h1>
        <img src={food.imgUrl} alt='classicburger'/>
        <h2 className='my-1'>{food.name}</h2>
        <h2 className='my-1'>{food.price}</h2>
        <h2 className='my-1'>{food.category}</h2>
        <h2 className='my-1'>{food.cal}</h2>
        <div className=' flex justify-between'>
          <Link to={`/menu/${food._id}`}>
              <BsInfoCircle className='text-2xl text-green-800' />
          </Link>
        </div>
        <button className="addToCartBttn" >
        Add To Cart 
      </button>
        
    </div>
  );
};

export default MenuSingleCard;
