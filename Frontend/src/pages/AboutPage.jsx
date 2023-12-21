import React from 'react'
import AboutCard from '../components/aboutCard/AboutCard'
import CustomNav from '../components/navbar/CustomNav'
import {motion} from 'framer-motion'

const AboutPage = () => {
  return (
    <>
        <CustomNav/>
        <h2 className='text-3xl text-red-500 font-bold p-8'>About Our Foods</h2>
        <motion.div 
         className='flex flex-col section__padding gap-y-16'
         initial ={{opacity:0 ,transform: 'translateX(-100%)',filter: 'blur(3px)' }}
      whileInView={{opacity:1 , transform: 'translateX(0)',filter: 'blur(0)' }}
      transition={{duration:.8, delay:.5 ,staggerChildren: 0.5}}
         >
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-y-8'>
              <AboutCard img='images/about1.jpg' heading='Commitment to Quality' dec="We're dedicated to improving the way we prepare our quality food and the ingredients that go into it"/>
              <AboutCard img='images/about2.jpg' heading='Commitment to Quality' dec="We're dedicated to improving the way we prepare our quality food and the ingredients that go into it"/>
              <AboutCard img='images/about3.jpg' heading='Commitment to Quality' dec="We're dedicated to improving the way we prepare our quality food and the ingredients that go into it"/>
              <AboutCard img='images/about4.jpg' heading='Commitment to Quality' dec="We're dedicated to improving the way we prepare our quality food and the ingredients that go into it"/>
            </div>
        </motion.div>
    </>
  )
}

export default AboutPage