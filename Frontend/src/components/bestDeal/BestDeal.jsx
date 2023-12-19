import React from 'react'
import './bestdeal.css'
const BestDealContent = (props)=>(
    <div className='bestdeal-container'>
      <h2>{props.name}</h2>
      <p className='bestdeal-paragraf'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <a href="#"><button class="bn632-hover bn28">Add to Cart</button></a>
    </div>
  )

const BestDeal = () => {
  return (
    <>
    <h2 className='resturant__bestDeal_heading'>Our Best Deals</h2>
    <div className='resturant__bestDeal section__padding'>
        <div className='resturant__bestDeal-leftCol'>
            <img src='ig1.jpg'/>
            <BestDealContent name="Steak with Srick"/>
        </div>
        <div className='resturant__bestDeal-rightCol'>
            <BestDealContent name="Pretty Big Burger"/>
            <img src='ig2.jpg'/>
        </div>

    </div>
    </>
  )
}

export default BestDeal