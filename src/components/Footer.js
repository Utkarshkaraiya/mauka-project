import React from 'react'
import imagef from "./Group 229.png"
import imagee1 from "./Group220.png"
import "./Footer.css"

export const Footer = () => {
    return (
        <div>
           
            <div className="footermain">
           <span className="imageor"><img src={imagee1} className="imagee1"></img>
                <h1 className="organic1">Organic</h1></span> 
                <p className="lorem2">Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor </p>
                <p className="copy1">© Copyright 2020 Nature</p>
                   <div>
                <h1 className="inform">Information</h1>
                <div className="points">
                <p>About Us</p>
                <p>Products</p>
                <p>Contact Us</p>
                <p>Termas of Servise</p>
                <h5>Products</h5>
                <h5>About Us</h5>
              
                </div>
                <div className="follow">
                <p>Follow Us</p>
                </div>
                <div className ="socialIcons">
                <i class="fa fa-facebook" style={{fontSize:"30px"}}></i>
                <i class="fa fa-linkedin" style={{fontSize:"30px"}}></i>
                <i class="fa fa-twitter" style={{fontSize:"30px"}}></i>
                <i class="fa fa-instagram" style={{fontSize:"30px"}}></i>
                
                </div>
                </div>
            </div>
        </div>
    )
}
