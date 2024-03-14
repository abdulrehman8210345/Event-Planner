// import React from 'react'

import { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">PLANNER</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="hero" spy={true} duration={500} smooth={true}>
            Home
          </Link>
          <Link to="services" spy={true} duration={500} smooth={true}>
            Services
          </Link>
          <Link to="about" spy={true} duration={500} smooth={true}>
            About
          </Link>
          <Link to="contact" spy={true} duration={500} smooth={true}>
            Contact
          </Link>
        </div>
      </div>
      <div
        className="hamburger"
        onClick={() => {
          setShow(!show);
        }}
      >
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;

