import React from "react";
import logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <ul className="left">
          <li>
            <img src={logo} alt="Not found" />
          </li>
        </ul>
        <ul className="right">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="service">Services</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
