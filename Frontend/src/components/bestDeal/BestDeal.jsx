import React from 'react'
import './bestdeal.css'
import {motion , useInView , useAnimate} from 'framer-motion'

const BestDealContent = (props)=>(
    <motion.div 
      className='bestdeal-container'
      initial ={{opacity:0 ,transform: 'translateX(-100%)',filter: 'blur(3px)'}}
      whileInView={{opacity:1 , transform: 'translateX(0)',filter: 'blur(0)'}}
      transition={{duration:.8 , delay:.6}}
      
    >
      <h2>{props.name}</h2>
      <p className='bestdeal-paragraf'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <a href="#"><button class="bn632-hover bn28">Add to Cart</button></a>
    </motion.div>
  )

const BestDeal = () => {
  return (
    <>
    <h2 className='resturant__bestDeal_heading'>Our Best Deals</h2>

    <div className='resturant__bestDeal section__padding'>
        <div className='resturant__bestDeal-leftCol'>
            <motion.img 
            src='images/bestdeal1.jpg'
            initial ={{opacity:0 ,scale:0 }}
            whileInView={{opacity:1 , scale:1}}
            transition={{duration:.8 }}
            />
            <BestDealContent name="Steak with Srick"/>
        </div>
        <div className='resturant__bestDeal-rightCol'>
            <BestDealContent name="Pretty Big Burger"/>
            <motion.img 
              src='images/bestdeal2.jpg'
              initial ={{opacity:0 ,scale:0 }}
              whileInView={{opacity:1 , scale:1}}
              transition={{duration:.8 }}
            />
        </div>

    </div>
    </>
  )
}

export default BestDeal