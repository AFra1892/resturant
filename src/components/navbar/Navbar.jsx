import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
// import logo from '../../assets/logo.svg'

const Menu = ()=>(
  <>
    <p><a href='#home'>Menu</a></p>
    <p><a href='#wgpt3'>Food</a></p>
    <p><a href='#possibilities'>Services</a></p>
    <p><a href='features'>About us</a></p>
    
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
          <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>sign in</p>
        <button type='button'>sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
        ?<RiCloseLine color="#000" size={27} onClick={()=>setToggleMenu(false)} />
        :<RiMenu3Line color="#000" size={27} onClick={()=>setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu/>
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