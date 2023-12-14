import React from 'react'
import './animated.css'
const AnimatedLanding = () => {
  return (
    <div>
        <nav >
    <ul >
      <li class = "fade-up">Home</li>
      <li class = "fade-up">About</li>
      <li class = "fade-up">Page</li>
      <li class = "fade-up">Contact</li>
    </ul>  
  </nav> 
  <header>
    <div class = "header-text fade-in">
      <h1>Pizza Hub</h1>
      <h2>SIMPLE AND <span>TASTY</span> RECIPES</h2>
    </div> 
  </header>
    </div>
  )
}

export default AnimatedLanding