import React from 'react'
import { BBox } from './4Box'
import img11 from "./11.png"
import img12 from "./12.png"
import img13 from "./13.png"
import "./BBox.css"
export const Upperbody8 = () => {
    return (
        <div className="full">
            <BBox image={img11}/>
             <BBox image={img12}/>
             <BBox image={img13}/>
             
             
        </div>
    )
}
