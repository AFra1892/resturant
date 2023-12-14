import '../App.css';
import Header from '../components/header/Header';
import React from 'react';
import Slider from '../components/Slider/Slider';
import BestDeal from '../components/bestDeal/BestDeal';
import people from '../assets/people.png'

function Landing() {
  const slides = [
    { url: "ig1.jpg", title: "beach",},
    { url: "ig2.jpg", title: "boat" },
    { url: "ig3.jpg", title: "forest" },
    { url: "ig4.jpg", title: "city" },
    { url: "ig5.jpg", title: "italy" },
  ];
  
  return (
    <div className="App">
      <div className='header'>
        <Header/>
      </div>
      {/* {menuData.map((item)=>{

         return <img src={item.img}/>
      })} */}
      <BestDeal/>
      <div id='gallery' className='dn section__padding'>
        <div className='slider-container_content'>
          <h4><i class='bx bxl-instagram-alt bx-sm'></i> Instagram</h4>
          <h2>Photo Gallery</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <div className="gpt3__header-content__people">
            <img src={people} />
            <p>1,600 people requested access a visit in last 24 hours</p>
            <button>View More</button>
          </div>
        </div>
        <div className='slider-container' >
          <Slider slides={slides} parentWidth={500} />
        </div>
      </div>
      {/* <Drink coldDrink={coldDrink}/> */}
    </div>
  );
}

export default Landing;
