import React from 'react'
import AboutCard from '../components/aboutCard/AboutCard'
const AboutPage = () => {
  return (
    <>
        <div  className='restirant__about section__padding'>
            <h2>About Our Foods</h2>
            <div className='resturant__about-cards'>
              <AboutCard img='images/about1.jpg' heading='Commitment to Quality' dec="We're dedicated to improving the way we prepare our quality food and the ingredients that go into it"/>
              <AboutCard img='images/about2.jpg' heading='Commitment to Quality' dec="We're dedicated to improving the way we prepare our quality food and the ingredients that go into it"/>
              <AboutCard img='images/about3.jpg' heading='Commitment to Quality' dec="We're dedicated to improving the way we prepare our quality food and the ingredients that go into it"/>
              <AboutCard img='images/about4.jpg' heading='Commitment to Quality' dec="We're dedicated to improving the way we prepare our quality food and the ingredients that go into it"/>
            </div>
        </div>
    </>
  )
}

export default AboutPage