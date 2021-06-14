import React from 'react'
import "./Header.css"
import imagee from "./Group220.png"

export const Header = () => {
    return (
        <div >
  <nav className="nav">
      <spam className="first" ><img src={imagee}></img>
      <h1 className="organic">organic</h1>
      </spam>
      <p className="home">Home</p>
      <p>Product</p>
      <p>Blog</p>
      <p>About Us</p>
      <p  className="contact">Contact</p>
</nav>
        </div>
    )
}
