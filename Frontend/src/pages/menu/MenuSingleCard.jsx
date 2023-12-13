import {useState , useContext} from 'react'
import { BsInfoCircle } from 'react-icons/bs';
import { IoIosAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import {OrderContext} from '../../context/order-context'

const MenuSingleCard = ({ food }) => {
  const {addToCart , cartItems} = useContext(OrderContext);
  const cartItemsCount = cartItems[food.idd]
    
  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
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
        <button className="addToCartBttn" onClick={() => addToCart(food.idd)}>
        Add To Cart {cartItemsCount > 0 && <> ({cartItemsCount})</>}
      </button>
        
    </div>
  );
};

export default MenuSingleCard;
