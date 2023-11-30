import { Link } from 'react-router-dom';

import { MdOutlineDelete } from 'react-icons/md';



const BookSingleCard = ({ book }) => {
  

  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
        <h2 className='my-1'>{book.name}</h2>
        <h2 className='my-1'>{book.price}</h2>
        <h2 className='my-1'>{book.category}</h2>
        <h2 className='my-1'>{book.cal}</h2>
        
        <img src={book.imgUrl} alt='classicburger'/>
        <Link to={`/test/delete/${book._id}`}>
          <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
        </Link>
    </div>
  );
};

export default BookSingleCard;
