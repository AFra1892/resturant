import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import { MdOutlineAddBox } from 'react-icons/md';
import BooksCard from '../components/FoodsCard';

const ManageMenu = () => {
  const [books, setBooks] = useState([]);

  

  useEffect(() => {
    
    axios
      .get('http://localhost:5555/foods')
      .then((response) => {
        setBooks(response.data.data);
        
      })
      .catch((error) => {
        console.log(error);
        
      });
  }, []);

  return (
    <div className='p-4'>
        <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Foods List</h1>
        <Link to='/test/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
        <BooksCard books={books} />
    </div>
  );
};

export default ManageMenu;
