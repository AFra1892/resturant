import '../App.css';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import React from 'react';
import Slider from '../components/Slider/Slider';
import Drink from '../components/Drink/Drink';


function Landing() {
  const slides = [
    { url: "ig1.jpg", title: "beach",},
    { url: "ig2.jpg", title: "boat" },
    { url: "ig3.jpg", title: "forest" },
    { url: "ig4.jpg", title: "city" },
    { url: "ig5.jpg", title: "italy" },
  ];
  const coldDrink = [
    {name:"soda",price:"$2"},
    {name:"soda",price:"$2"},
    {name:"soda",price:"$2"},
    {name:"soda",price:"$2"},
    {name:"soda",price:"$2"}
]
  return (
    <div className="App">
      <div className='header'>
        <Navbar/>
        <Header/>
      </div>
      <Menu/>
      
      <div id='gallery' className='dn section__padding'>
        <div className='slider-container_content'>
          <h4><i class='bx bxl-instagram-alt bx-sm'></i> Instagram</h4>
          <h2>Photo Gallery</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button>View More</button>
        </div>
        <div className='slider-container' >
          <Slider slides={slides} parentWidth={500} />
        </div>
      </div>
      <Drink coldDrink={coldDrink}/>
      <Footer/>
    </div>
  );
}

export default Landing;
