import React from 'react'
import Navbar from '../navbar/Navbar'
import AboutCard from './AboutCard'

const About = () => {
    const page_style ={
      textAlign:'center'
    }
    const styles={
      fontSize: "54px",
      fontWeight: "700",
      lineHeight: "56px",
      marginBottom:"50px"
    }
    const card_style ={
      display:"grid",
      gridTemplateColumns:"1fr 1fr",
      gap:"50px"
    }
  return (
        <div style={page_style} className='restirant__about section__padding'>
            <h2 style={styles}>About Our Foods</h2>
            <div style={card_style} className='resturant__about-cards'>
              <AboutCard img='images/about1.jpg' heading='Commitment to Quality' dec="We're dedicated to improving the way we prepare our quality food and the ingredients that go into it"/>
              <AboutCard img='images/about2.jpg' heading='Commitment to Quality' dec="We're dedicated to improving the way we prepare our quality food and the ingredients that go into it"/>
              <AboutCard img='images/about3.jpg' heading='Commitment to Quality' dec="We're dedicated to improving the way we prepare our quality food and the ingredients that go into it"/>
              <AboutCard img='images/about4.jpg' heading='Commitment to Quality' dec="We're dedicated to improving the way we prepare our quality food and the ingredients that go into it"/>
            </div>
        </div>
  )
}

export default About