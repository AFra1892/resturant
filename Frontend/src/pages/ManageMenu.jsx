import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar/Navbar'
import { Link } from 'react-router-dom';
import { IoMdExit } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { MdOutlineAddBox } from 'react-icons/md';
import FoodsCard from '../components/FoodsCard';

const ManageMenu = () => {
  const [foods, setFoods] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  

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

  function clickHandeler(){
		localStorage.removeItem('token')
		enqueueSnackbar('Loged out successfully', { variant: 'success' });
		navigate('/about')
	}
  return (
  <>
    <Navbar/>
    <div className='p-4'>
        <IoMdExit className='cursor-pointer absolute right-0' size={40} color='red' onClick={clickHandeler} />
        <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Foods List</h1>

        <Link to='/test/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
        <FoodsCard foods={foods} />
    </div>
  </>
  );
};

export default ManageMenu;
