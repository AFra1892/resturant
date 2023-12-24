import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteOrder = () => {
  
  const navigate = useNavigate();
  const { id , name } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteOrder = () => {
    
    axios
      .delete(`http://localhost:5555/users/${name}/user/${id}`)
      .then(() => {
        enqueueSnackbar('item Deleted From Order List', { variant: 'success' });
        navigate('/cart');
      })
      .catch((error) => {
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  
  return (
    <div className='p-4 bg-yellow-500 h-screen'>
            
      <div className='flex flex-col items-center border-2 border-red-500 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this Order?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteOrder}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteOrder;
