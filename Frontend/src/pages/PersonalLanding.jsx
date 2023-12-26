import React from 'react'
import { IoMdExit } from "react-icons/io";
import { useNavigate , Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import OrderHistory from '../components/OrderHistory';
import '../components/header/header.css'
import FooterTail from '../components/Footer/FooterTail';
import Navbar from '../components/navbar/Navbar';
const DashTest = ({logedInUser}) => {
    
  
    const styles = {
        backgroundImage: `url(${logedInUser.img})`,
        backgroundSize: 'cover'
    }
    
  return (
    <>
    <Navbar isLoged={true}/>
    <div className='h-screen bg-yellow-500' style={styles}>
          <Link to={`/dashboard/logout`}>
            <IoMdExit className='cursor-pointer fixed right-0 mr-8' size={40} color='red'/>
          </Link>
		<div className="pizzahub__header section__padding">
            <div className="pizzahub__header-content">
                <h1>Hello <span>{logedInUser.name}</span> Welcome to BURGER LAND</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <div className="pizzahub__header-content_btns">
                <button className="bn632-hover bn28">Book A Table</button>
                </div>
            </div>
        </div>
    </div>
    <OrderHistory/>
    <FooterTail/>
    
    </>
  )
}

export default DashTest