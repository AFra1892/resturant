import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import FoodsCard from '../../components/menu-card/FoodsCard';
import Sidebar from '../../components/dashboard/Sidebar';
import Header from '../../components/dashboard/Header';

const ManageMenu = () => {
  const [foods, setFoods] = useState([]);


  

  useEffect(() => {
    
    axios
      .get('http://localhost:5555/foods')
      .then((response) => {
        setFoods(response.data.data);
        
      })
      .catch((error) => {
        console.log(error);
        
      });
  }, []);

  
  return (
  <>
      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Header/>
        <Sidebar/>
        <div className='ml-56 p-12'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl my-8'>Menu Items</h1>

          <Link to='/admin/dashboard/manage/create'>
            <MdOutlineAddBox className='text-sky-800 text-4xl' />
          </Link>
        </div>
          <FoodsCard foods={foods} />
        </div>
    </div>
  </>
  );
};

export default ManageMenu;


