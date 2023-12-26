import React from "react";
import './header.css'

export default function Header(){
    return(
        <>
            <div className='header flex flex-row justify-between mr-32'>
        <div className="pizzahub__header section__padding">
              <div className="pizzahub__header-content">
                  <h1 className='yellow-text'>SIMPLE AND <span className='red-text'>TASTY</span> RECIPES</h1>
                  <p className='text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <div className="pizzahub__header-content_btns flex gap-x-4">
                  <button className="bn632-hover bn28">Book A Table</button>

                  </div>
              </div>
          </div>
          <div>
            <div className='circle absolute'></div>
              <img className='mr-32 pt-24 custom' src='images/nobg.png' alt='burger'/>
          </div>
        </div>
        </>
    )
}