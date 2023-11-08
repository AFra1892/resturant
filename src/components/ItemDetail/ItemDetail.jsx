import React from 'react'
import ch from './chicken.jpg'
import Navbar from '../navbar/Navbar'
import './itemdetail.css'
const ItemDetail = () => {
  return (
    <>
    <Navbar/>
    <div className='resturant_ItemDetail section__padding'>
        <img src={ch} alt='main'/>
        <div className='resturant_ItemDetail-information'>
            <h1>Hamburger Royal TS</h1>
            <p>Jetzt noch frischer, saftiger und einfach mehr mhmm: der Hamburger Royal TS mit milder Sandwichsauce, knackigem Salat, 100 % Rindfleisch aus Deutschland, zwei Tomatenscheiben – und alles gekrönt mit einem extra fluffigen Bun.</p>
        </div>
    </div>
    </>
  )
}

export default ItemDetail