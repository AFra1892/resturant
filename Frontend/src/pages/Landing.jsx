import '../App.css';
import React from 'react';
import BestDeal from '../components/bestDeal/BestDeal';
import '../components/header/header.css'
import '../components/navbar/navbar.css'
import Navbar from '../components/navbar/Navbar';
import FooterTail from '../components/Footer/FooterTail'
import {motion} from 'framer-motion'
import Comment from '../components/comment/Comment';


function Landing() {
  

  return (
    <div className="App">
      <div className='rect h-screen rounded-b-3xl'></div>

      {/* Navbar setup */}
        <Navbar isLoged={false}/>


{/* Header setup */}
      <div className='header flex flex-row justify-between mr-32'>
        <div className="pizzahub__header section__padding">
              <div className="pizzahub__header-content">
                  <h1 className='yellow-text'>SIMPLE AND <span className='red-text'>TASTY</span> RECIPES</h1>
                  <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <div className="pizzahub__header-content_btns flex gap-x-4">
                  <button className="bn632-hover bn28">Book A Table</button>

                  </div>
              </div>
          </div>
          <div>
            <div className='circle absolute'></div>
              <img className='mr-32 pt-24 custom' src='images/nobg.png' alt='burger'/>
          </div>
        </div>



      {/* Menu Items */}
     

      {/* <motion.div className='p-4 flex sm:flex-row flex-col gap-24  justify-center items-center animated-div'
      
      initial ={{opacity:0 ,scale:0  , x:500}}
      whileInView={{opacity:1 , scale:1 , x:0}}
      transition={{duration:.8}}
        >
          
  
          <div className=' cart-glass flex p-4' >
            <img  src='images/nobg.png' alt='pic'/>
          </div>
          <div className=' cart-glass flex p-4'>
            <img  src='images/nobg.png' alt='pic'/>
          </div>
          <div className='cart-glass flex p-4'>
            <img  src='images/nobg.png' alt='pic'/>
          </div>
  
  
        </motion.div> */}
  

      <BestDeal/>
      <motion.div 
      className='flex sm:flex-row flex-col gap-y-12'
      initial ={{opacity:0 ,transform: 'translateX(-100%)',filter: 'blur(3px)' }}
      whileInView={{opacity:1 , transform: 'translateX(0)',filter: 'blur(0)' }}
      transition={{duration:.8, delay:.5 ,staggerChildren: 0.5}}
      >
        <Comment/>
        <Comment/>
        <Comment/>
      </motion.div>
      <FooterTail/>
    </div>
  );
}

export default Landing;

// Slider
      // <div id='gallery' className='dn section__padding'>
      //   <div className='slider-container_content'>
      //     <h4><i class='bx bxl-instagram-alt bx-sm'></i> Instagram</h4>
      //     <h2>Photo Gallery</h2>
      //     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      //     <div className="gpt3__header-content__people">
      //       <img src={people} />
      //       <p>1,600 people requested access a visit in last 24 hours</p>
      //       <button>View More</button>
      //     </div>
      //   </div>
      //   <div className='slider-container' >
      //     <Slider slides={slides} parentWidth={500} />
      //   </div>
      // </div>