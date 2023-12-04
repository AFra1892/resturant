import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ShowBook = () => {
  const [book, setBook] = useState({});
  
  const { id } = useParams();

  useEffect(() => {
    
    axios
      .get(`http://localhost:5555/foods/${id}`)
      .then((response) => {
        setBook(response.data);
        
      })
      .catch((error) => {
        console.log(error);
        
      });
  }, []);

  return (
    <div className='p-4'>
      
      <h1 className='text-3xl my-4'>Show Book</h1>
      
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{book.name}</span>
          </div>
          
          
        </div>
      
    </div>
  );
};

export default ShowBook;
