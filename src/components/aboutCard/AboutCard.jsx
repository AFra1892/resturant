import React from 'react'
import './about-card.css'
const AboutCard = (props) => {
  return (
    <div className='resturant__aboutCard'>
        <img src={props.img} alt='poster'/>
        <h3>{props.heading}</h3>
        <p>{props.dec}</p>
        <button>Learn More</button>
    </div>
  )
}

export default AboutCard