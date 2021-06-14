import React from 'react'
import "./BBox.css"
export const BBox = (props) => {
    return (
        <div className="full1">
            <img className="img4" src={props.image}></img>
            <h1 className="blog">Blog Post One</h1>
            <h1 className="loremm">Lorem ipsum dolor sit amet, 
consectetur adipiscing elit, sed
 do eiusmod.</h1>
 <p className="read">
 Read More
 </p>
        </div>
    )
}
