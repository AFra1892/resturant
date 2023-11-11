import React from 'react'
import './drink.css'

const ColdDrinks = ()=>(
    <div className='drink-container'>
    <div className='single-drink'>
        <div className='single-drink-text'>
            <h3>CLASSIC MOJITO</h3>
            <p>Rum infused with frsh lime, mint and suger</p>
        </div>
      <p>$5.00</p>
    </div>
    <div className='single-drink'>
    <div className='single-drink-text'>
            <h3>ROYAL MARTINI</h3>
            <p>Rum infused with frsh lime, mint and suger</p>
        </div>
      
      <p>$5.00</p>
    </div>
    <div className='single-drink'>
    <div className='single-drink-text'>
            <h3>RASPBERRY MOJITO</h3>
            <p>Rum infused with frsh lime, mint and suger</p>
        </div>
      
      <p>$5.00</p>
    </div>
    <div className='single-drink'>
    <div className='single-drink-text'>
            <h3>DAIQUIRI</h3>
            <p>Rum infused with frsh lime, mint and suger</p>
        </div>
      
      <p>$5.00</p>
    </div>
    <div className='single-drink'>
    <div className='single-drink-text'>
    <h3>RETRO MARGARITA</h3>
            <p>Rum infused with frsh lime, mint and suger</p>
        </div>
      
      <p>$5.00</p>
    </div>
    </div>
  )

const Drink = () => {
   
     
  return (
    <div id='drinks' className='resturant__drink section__padding'>

            <ColdDrinks/>
            <img className='resturant__drink-image' src='drink.jpg'/>
            <ColdDrinks/>
        

    </div>
  )
}

export default Drink