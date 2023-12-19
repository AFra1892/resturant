import React from "react";
import './header.css'

export default function Header(){
    return(
        <div className="pizzahub__header section__padding">
            <div className="pizzahub__header-content">
                <h1>SIMPLE AND <span>TASTY</span> RECIPES</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <div className="pizzahub__header-content_btns">
                    <button type='button'>Add to Cart</button>
                    <button type='button'>Book a Table</button>
                </div>
            </div>
        </div>
    )
}