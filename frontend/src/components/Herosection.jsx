// import React from 'react'

import { Link } from "react-scroll"

const Herosection = () => {
  return (
    <section className="hero">
      <img src="/restaurant.jpg" alt="hero resturant image" />
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Your Personal dream maker</h1>
          <p>Its all about dream maker</p>
          <Link to="contact" spy={true} duration={500} smooth={true} >BOOK NOW</Link>
        </div>
      </div>
    </section>
  )
}

export default Herosection