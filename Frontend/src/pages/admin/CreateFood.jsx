import React, { useState } from 'react';


import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateFood = () => {
  const [name, setName] = useState('');
  const [imgUrl,setImgUrl] = useState('');
  const [price,setPrice] = useState();
  const [cal,setCal] = useState();
  const [category,setCategory] = useState();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      name,
      imgUrl,
      price,
      cal,
      category
    };
    
    axios
      .post('http://localhost:5555/foods', data)
      .then(() => {
        
        enqueueSnackbar('Food Created successfully', { variant: 'success' });
        navigate('/test');
      })
      .catch((error) => {
        
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      
      <h1 className='text-3xl my-4'>Create Book</h1>
      
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>imgUrl</label>
          <input
            type='text'
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Price</label>
          <input
            type='number'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Cal</label>
          <input
            type='number'
            value={cal}
            onChange={(e) => setCal(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Category</label>
          <input
            type='text'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateFood