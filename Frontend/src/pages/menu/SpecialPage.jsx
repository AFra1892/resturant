import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';




const SpecialPage = () => {
  const [food, setFood] = useState({});
  
  const { id } = useParams();

  useEffect(() => {
    
    axios
      .get(`http://localhost:5555/foods/${id}`)
      .then((response) => {
        setFood(response.data);
      })
      .catch((error) => {
        console.log(error);
        
      });
  }, []);

  return (
    <>
    <Navbar/>
    <div className='p-4'>
      
      <h1 className='text-3xl my-4'>{food.name} burger</h1>
      
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-100 p-4'>
          <div className='my-4'>
            <img src={`../../images/${food.name}.jpg`} alt='burger'/>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{food.name}</span>
          </div>
          
          
        </div>
      
    </div>
    </>
  );
};

export default SpecialPage;
