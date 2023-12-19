import '../App.css';
import React from 'react';
// import Slider from '../components/Slider/Slider';
import BestDeal from '../components/bestDeal/BestDeal';
// import people from '../assets/people.png'
import '../components/header/header.css'
import '../components/navbar/navbar.css'
import NewNav from '../components/navbar/LogedNavbar';
import { FaCartShopping } from "react-icons/fa6";

function Landing() {
  const NavList = ()=>(
    <>
      <p><a className='fade-in' href='/'>Home</a></p>
      <p><a className='fade-in' href='/menu'>Menu</a></p>
      <p><a className='fade-in' href='/about'>About</a></p>
      <p><a className='fade-in' href='#gallery'>Gallery</a></p>
      <p><a className='fade-in' href='#contact'>Contact</a></p>
      <a className='fade-in' href='/cart'><FaCartShopping color='white' size={20} /></a>
    </>
  )
  // const slides = [
  //   { url: "ig1.jpg", title: "beach",},
  //   { url: "ig2.jpg", title: "boat" },
  //   { url: "ig3.jpg", title: "forest" },
  //   { url: "ig4.jpg", title: "city" },
  //   { url: "ig5.jpg", title: "italy" },
  // ];
  
  return (
    <div className="App">
      <div className='flex flex-row items-center justify-between bg-blue-300 h-24 p-12'>
        <div className='gpt3__navbar-links_container'>
        <NavList/>
        </div>
        <div className='flex'>
        <h1 className='text-2xl font-bold'>BURGER LAND</h1>
        </div>
        <div className='flex'>
        <NewNav/>
        </div>
      </div>








      <div className='header flex flex-row justify-between mr-32'>
        <div className="pizzahub__header section__padding">
              <div className="pizzahub__header-content">
                  <h1 className='yellow-text'>SIMPLE AND <span className='red-text'>TASTY</span> RECIPES</h1>
                  <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <div className="pizzahub__header-content_btns flex gap-x-4">
                      <button type='button'>Add to Cart</button>
                      <button type='button'>Book a Table</button>
                  </div>
              </div>
          </div>
          <div className=''>
            <div className='rect h-screen rounded-b-3xl'>.</div>
            <div className='circle absolute'></div>
              <img className='mr-32 pt-24' src='images/nobg.png' alt='burger'/>
          </div>
        </div>
      
      {/* <BestDeal/> */}
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