import React from 'react'
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const LogOutAlert = () => {

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    function clickHandeler(){
		localStorage.removeItem('token')
		enqueueSnackbar('Loged out successfully', { variant: 'success' });
		navigate('/')
	}
  return (
    <div className='p-4 bg-yellow-500 h-screen flex justify-center items-center'>
      
      {/* <h1 className='text-3xl my-4'>Log Out</h1> */}
      
      <div className='bg-white flex flex-col items-center border-2 border-red-500 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to Log Out?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={clickHandeler}
        >
          Yes
        </button>
      </div>
    </div>
  )
}

export default LogOutAlert