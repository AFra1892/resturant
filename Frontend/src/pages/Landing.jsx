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
      <div className='rect h-screen rounded-b-3xl'></div>

      {/* Navbar setup */}
      <div className='flex flex-row items-center justify-between  h-24 p-12'>
        <div className='gpt3__navbar-links_container sm:text-xl hidden'>
        <NavList/>
        </div>
        <div className='flex'>
        <h1 className='text-2xl font-bold  text-red-500  border-2 border-red-500 p-2'>BURGER LAND</h1>
        </div>
        <div className='flex sm:pl-32 lg:28'>
            <a href="/signin"><button class="bn632-hover bn28 sm:block">Log in</button></a>
            <a href="/signup"><button class="bn632-hover bn28 sm:block">Sign up</button></a>
        </div>
        <div className='flex'>
        <NewNav/>
        </div>
      </div>
{/* Header setup */}
      <div className='header flex flex-row justify-between mr-32'>
        <div className="pizzahub__header section__padding">
              <div className="pizzahub__header-content">
                  <h1 className='yellow-text'>SIMPLE AND <span className='red-text'>TASTY</span> RECIPES</h1>
                  <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <div className="pizzahub__header-content_btns flex gap-x-4">
                  <a href="#"><button class="bn632-hover bn28">Book A Table</button></a>

                  </div>
              </div>
          </div>
          <div className=''>
            <div className='circle absolute'></div>
              <img className='mr-32 pt-24 custom' src='images/nobg.png' alt='burger'/>
          </div>
        </div>
      {/* Menu Items */}
      <div className='p-4 flex sm:flex-row flex-col gap-24  justify-center items-center'>
        <div className='cart-glass flex p-4'>
          <img  src='images/nobg.png' alt='pic'/>
        </div>
        <div className='cart-glass flex p-4'>
          <img  src='images/nobg.png' alt='pic'/>
        </div>
        <div className='cart-glass flex p-4'>
          <img  src='images/nobg.png' alt='pic'/>
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