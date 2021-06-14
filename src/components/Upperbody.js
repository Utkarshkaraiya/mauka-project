import React from 'react'
import imagee from "./Group220.png"
import image from "./Group195.png"
import "./Upperbody.css"
export const Upperbody = () => {
    return (
        <div className="recc1" >
            <div className ="rec2">
            <h5 className="healthy">Healthy life with</h5>
        <h1 className="natural">Natural Organic</h1>
       <p className="paraa">vegetables are edible parts of a plant that are used in
         cooking or can be eaten now</p>
         
         <button className="button">
         <span className="rectangle">Explore Now</span>
      </button>
      </div>
      <img src={image}
       className="img"></img>
       <img src={imagee}className="imgg1"></img>
        </div>
    )
}
