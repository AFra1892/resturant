import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'

const NavList = ()=>(
  <>
    <p><a href='/'>Home</a></p>
    <p><a href='/menu'>Menu</a></p>
    <p><a href='#drinks'>Drinks</a></p>
    <p><a href='#gallery'>Gallery</a></p>
    <p><a href='#contact'>Contact</a></p>
    <i class='bx bx-shopping-bag' ></i>
  </>
)




const Navbar = () => {

const [toggleMenu,setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <h1>Pizza Hub</h1>
        </div>
        <div className='gpt3__navbar-links_container'>
          <NavList/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>sign in</p>
        <button type='button'>sign up</button>
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
                <p>sign in</p>
                <button type='button'>sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar