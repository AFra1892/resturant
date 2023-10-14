import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import React from 'react';
import Slider from './components/Slider/Slider';
import first from './assets/1.png'
import second from './assets/header-bg (2).jpg'
function App() {
  const slides = [
    { url: "image-1.jpg", title: "beach",},
    { url: "image-2.jpg", title: "boat" },
    { url: "image-3.jpg", title: "forest" },
    { url: "image-4.jpg", title: "city" },
    { url: "image-5.jpg", title: "italy" },
  ];

  return (
    <div className="App">
      <div className='header'>
        <Navbar/>
        <Header/>
      </div>
      <Menu/>
      <div className='slider-container' >
        {/* <h2>What our customers are saying</h2> */}
        <Slider slides={slides} parentWidth={500} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
