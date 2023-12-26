import '../App.css';
import React from 'react';
import BestDeal from '../components/bestDeal/BestDeal';
import '../components/header/header.css'
import Navbar from '../components/navbar/Navbar';
import FooterTail from '../components/Footer/FooterTail'
import Header from '../components/header/Header';
import Comments from '../components/comment/Comments';


function Landing() {
  

  return (
    <div className="App">
      <div className='rect h-screen rounded-b-3xl'></div>
        <Navbar isLoged={false}/>
        <Header/>
        <BestDeal/>
        <Comments/>
        <FooterTail/>
    </div>
  );
}

export default Landing;