import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import { FaCartShopping } from "react-icons/fa6";
const NavList = ()=>(
  <>
    <p><a className='fade-in' href='/'>Home</a></p>
    <p><a className='fade-in' href='/menu'>Menu</a></p>
    <p><a className='fade-in' href='/about'>About</a></p>
    <p><a className='fade-in' href='/contact'>Contact</a></p>
    <a className='fade-in' href='/cart'><FaCartShopping color='white' size={20} /></a>
  </>
)




const Navbar = () => {

const [toggleMenu,setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links flex gap-x-16'>
        <div className='gpt3__navbar-links_container'>
          <NavList/>
        </div>
        <div className='gpt3__navbar-links_logo'>
          <h1 className='text-2xl border-3 border-red-600 '>BURGER LAND</h1>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <a href='/signin'>sign in</a>
        <a href='/signup'>sign up</a>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
        ?<RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)} />
        :<RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <NavList/>
              <div className='gpt3__navbar-menu_container-links-sign'>
                <a href='/signin'>sign in</a>
                <a href='/signup'>sign up</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar