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
                <li><a href="#" data-text="Home">Home</a></li>
                <li><a href="#" data-text="About">About</a></li>
                <li><a href="#" data-text="Services">Services</a></li>
                <li><a href="#" data-text="Team">Team</a></li>
                <li><a href="#" data-text="Portfolio">Portfolio</a></li>
                <li><a href="#" data-text="Contact">Contact</a></li>
            </ul>
        </div>
    </div>
    <button class="menuicon active" id="toggle" onClick={menuToggle}></button>
     

    </>


  )
}

export default NewNav