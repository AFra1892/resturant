import { Link } from 'react-router-dom';

import { MdOutlineDelete } from 'react-icons/md';



const MenuSingleCard = ({ food }) => {
  

  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
        <img src={food.imgUrl} alt='classicburger'/>
        <h2 className='my-1'>{food.name}</h2>
        <h2 className='my-1'>{food.price}</h2>
        <h2 className='my-1'>{food.category}</h2>
        <h2 className='my-1'>{food.cal}</h2>
        <a href={`/newMenu/${food._id}`}>Special Page</a>
        
    </div>
  );
};

export default MenuSingleCard;
