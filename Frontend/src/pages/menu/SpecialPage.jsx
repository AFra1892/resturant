import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import FooterTail from '../../components/Footer/FooterTail'



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
    <div className=' h-screen p-4 pb-32 mb-9'>
      
      
        <div className='flex justify-between flex-col sm:flex-row border-2 border-yellow-500 rounded-xl w-100 p-4 mb-8'>
          <div className=' flex py-12'>
            <img className= 'flex sm:h-96 h-80 px-10 ' src={`../../images/${food.name}.jpg`} alt='burger'/>
          </div>
          <div className='my-4 px-20'>
            <h1 className='font-black sm:text-6xl text-3xl my-4'>{food.name} burger</h1>
            <h2 className='py-6 text-3xl'>{food.cal} Cal</h2>
            {/* <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{food.name}</span> */}
            <p className='max-w-xs'>
            Enjoy the cheesy deliciousness of a McDonald's Cheeseburger! Our simple, classic cheeseburger begins with a 100% pure beef burger patty seasoned with just a pinch of salt and pepper. The McDonald's Cheeseburger is topped with a tangy pickle, chopped onions, ketchup, mustard, and a slice of melty American cheese. It contains no artificial flavors, preservatives or added colors from artificial sources.* Our pickle contains an artificial preservative, so skip it if you like. For more delicious burger variations explore the McDonald's burger menu.
            There are 300 calories in a McDonald's Cheeseburger. Order one today from the full menu in the app using contactless Mobile Order & Pay for pickup or McDelivery® and earn points on every order with MyMcDonald's Rewards to redeem for a free Cheeseburger.^
            </p>
          </div>
          
          
        </div>
      
    <FooterTail/>
    </div>
    </>
  );
};

export default SpecialPage;
