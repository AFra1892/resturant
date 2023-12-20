import React from 'react'
import AboutCard from '../components/aboutCard/AboutCard'
import CustomNav from '../components/navbar/CustomNav'
const AboutPage = () => {
  return (
    <>
        <CustomNav/>
        <div  className='flex flex-col section__padding gap-y-16'>
            <h2 className='text-3xl text-red-500 font-bold'>About Our Foods</h2>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-y-8'>
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