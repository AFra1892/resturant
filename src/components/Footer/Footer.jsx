import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div id='contact' className='resturant__footer section__padding'>
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
            <p><a href='#menu'>Menu</a></p>
            <p><a href='#drinks'>Drinks</a></p>
            <p><a href='#gallery'>Gallery</a></p>
            <p><a href='#contact'>Contact</a></p>
        </div>
        <div className='resturant__footer-contacts'>
            <h4>Contact</h4>
            <p><i class='bx bxs-edit-location' ></i> Tehran,Iran</p>
            <p><i class='bx bx-envelope'></i> example@gmail.com</p>
            <p><i class='bx bx-phone' ></i> phone number</p>
        </div>
    </div>
  )
}

export default Footer