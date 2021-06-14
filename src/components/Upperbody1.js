import React from 'react'
import "./Upperbody1.css"
import image1 from "./Group114.png"
export const Upperbody1 = (props) => {
    return (
        <div className="recc">
            <img src={image1} className="img1"></img>
            <h1 className="welcome">{props.name}</h1>
            <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}
