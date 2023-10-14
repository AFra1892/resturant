import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='resturant__footer section__padding'>
        <div className='resturant__footer-description'>
            <h3>Pizza Hub</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
        </div>
        <div className='resturant__footer-infolinks'>
            <h4>Info Links</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Return & Refund</p>
            <p>Payment Method</p>
        </div>
        <div className='resturant__footer-quicklinks'>
            <h4>Quick Links</h4>
            <p><a href='#home'>Menu</a></p>
            <p><a href='#wgpt3'>Food</a></p>
            <p><a href='#possibilities'>Services</a></p>
            <p><a href='features'>About us</a></p>
        </div>
        <div className='resturant__footer-contacts'>
            <h4>Contact</h4>
            <p>Tehran,Iran</p>
            <p>example@gmail.com</p>
            <p>phone number</p>
        </div>
    </div>
  )
}

export default Footer