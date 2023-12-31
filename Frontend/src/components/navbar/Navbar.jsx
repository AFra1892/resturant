import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import { Link } from 'react-router-dom';
import './navbar.css'
  

const Navbar = ({isLoged}) => {


  function menuToggle() {
    var nav = document.getElementById("nav")
    var toggle = document.getElementById("toggle")
    nav.classList.toggle("active")
    toggle.classList.toggle("active")
}
   
  return (
    <>
    
      <div className='flex flex-row items-center justify-between  h-24 p-12'>
        {/* links right handside */}
        <div className='gpt3__navbar-links_container sm:text-xl hidden'>
          {isLoged ? 
            <a className='fade-in mr-4' href='/dashboard/logout'><IoMdExit color='red' size={30} /></a>
           
        :''}
          <p><a className='fade-in' href='/'>Home</a></p>
          <p><a className='fade-in' href='/menu'>Menu</a></p>
          <p><a className='fade-in' href='/about'>About</a></p>
          <p><a className='fade-in' href='/contact'>Contact</a></p>
          <a className='fade-in' href='/cart'><FaCartShopping color='red' size={20} /></a>
        </div>
        {/* logo */}
        <div className='flex sm:pl-28 absolute right-1/2'>
          <h1 className='text-3xl font-bold  text-red-500   border-4 border-red-500 p-2'>BURGER LAND</h1>
        </div>
        {/* auth btns */}
        {isLoged ?
        '' 
        
        :
        <div className='flex sm:pl-32 lg:28 relative -right-48'>
            <a href="/signin"><button className="bn632-hover bn28 sm:block">Log in</button></a>
            <a href="/signup"><button className="bn632-hover bn28 sm:block">Sign up</button></a>
        </div>
}
        {/* hambergur menu */}
        <div className='flex'> 
        <div class="fullPageMenu active" id="nav">
        
        <div class="nav ">
            <ul>
                <li><a href="/" data-text="Home">Home</a></li>
                <li><a href="/about" data-text="About">About</a></li>
                <li><a href="/menu" data-text="Menu">Menu</a></li>
                <li><a href="/cart" data-text="Cart">Cart</a></li>
                <li><a href="/signup" data-text="Sign in">Sign in</a></li>
                <li><a href="/signin" data-text="Log in">Log in</a></li>
            </ul>
        </div>
    </div>
    <button class="menuicon active" id="toggle" onClick={menuToggle}></button>
     
        </div>
      </div>
    
    </>


  )
}

export default Navbar