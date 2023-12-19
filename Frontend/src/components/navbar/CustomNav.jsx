import React from 'react'
import '../../components/header/header.css'
import './navbar.css'
import NewNav from './LogedNavbar'
import { FaCartShopping } from "react-icons/fa6";

const CustomNav = () => {
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
  return (
    <div className='flex flex-row items-center justify-between  h-24 p-12 bg-yellow-500'>
        <div className='gpt3__navbar-links_container sm:text-xl hidden text-black'>
        <NavList/>
        </div>
        <div className='flex sm:pl-28'>
        <h1 className='text-3xl font-bold  text-red-500   border-4 border-red-500 p-2'>BURGER LAND</h1>
        </div>
        <div className='flex sm:pl-32 lg:28'>
            <a href="/signin"><button class="bn632-hover bn28 sm:block">Log in</button></a>
            <a href="/signup"><button class="bn632-hover bn28 sm:block">Sign up</button></a>
        </div>
        <div className='flex'>
        <NewNav/>
        </div>
      </div>
  )
}

export default CustomNav