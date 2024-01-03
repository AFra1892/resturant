import React from 'react'

import OrderHistory from '../components/OrderHistory';
import '../components/header/header.css'
import FooterTail from '../components/Footer/FooterTail';
import Navbar from '../components/navbar/Navbar';
import {motion} from 'framer-motion'

const DashTest = ({logedInUser}) => {
    
  
    const styles = {
        backgroundImage: `url(${logedInUser.img})`,
        backgroundSize: 'cover'
    }
    const imgStyles = {
      height:'650px'
    }
  return (
    <>
    <Navbar isLoged={true}/>
    {logedInUser.name === 'admin' 
    ?<div className='w-screen h-12 bg-blue-400  justify-center items-center'>

    <a href='/admin/dashboard' className='text-2xl font-bold text-white'>

      Admin Pannel
    </a>
    </div>
    : ''
    }
    <div className='h-screen bg-yellow-500' style={styles}>
          {/* <Link to={'/dashboard/logout'}>
            <IoMdExit className='cursor-pointer fixed right-0 mr-8' size={40} color='red'/>
          </Link> */}
		<div className="pizzahub__header section__padding">
            <div className="pizzahub__header-content">
                <h1>Hello <span>{logedInUser.name}</span> Welcome to BURGER LAND</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <div className="pizzahub__header-content_btns">
                <button className="bn632-hover bn28">Book A Table</button>
                </div>
            </div>
        <motion.div 
          className='flex absolute -right-28 top-12'
          initial ={{opacity:0 ,transform: 'translateX(-100%)',filter: 'blur(3px)' }}
          whileInView={{opacity:1 , transform: 'translateX(0)',filter: 'blur(0)' }}
          transition={{duration:.8, delay:.1 ,staggerChildren: 0.5}}
      >
              <img style={imgStyles}  src='images/Personal-Landing.png' alt='burger'/>
          </motion.div>
        </div>
    </div>
    {logedInUser.name === 'admin' 
    ? ""
    : <OrderHistory/>
    }
    <FooterTail/>
    
    </>
  )
}

export default DashTest