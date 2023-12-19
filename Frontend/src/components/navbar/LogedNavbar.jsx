import React from 'react'

import './newnav.css'
  
const NewNav = () => {
  function menuToggle() {
    var nav = document.getElementById("nav")
    var toggle = document.getElementById("toggle")
    nav.classList.toggle("active")
    toggle.classList.toggle("active")
}
   
  return (
    <>
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
     

    </>


  )
}

export default NewNav