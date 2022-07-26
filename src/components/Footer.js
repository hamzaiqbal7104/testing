import React from "react";
import fb from "../assets/FB.svg";
import tw from "../assets/Twiter.svg";
import insta from "../assets/Insta.svg";
import li from "../assets/Linkedin.svg";
import logo from "../assets/LogoBN.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="f-left">
          <h3>Get in touch with us for your service</h3>
          <div className="f-left-social">
            <div className="facebook">
              <img src={fb} alt="Not found" />
            </div>
            <div className="twiter">
              <img src={tw} alt="Not found" />
            </div>
            <div className="insta">
              <img src={insta} alt="Not found" />
            </div>
            <div className="linkedin">
              <img src={li} alt="Not found" />
            </div>
          </div>
        </div>
        <div className="f-right">
          <div className="contact">
            <h6>Help line Number</h6>
            <p>1800 265 24 52</p>
          </div>
          <div className="address">
            <h6>Address</h6>
            <p>NH 234 Public Square San Francisco 65368</p>
          </div>
          <div className="time">
            <h6>We are Open</h6>
            <p>Monday to Friday 9:00 AM to  10:00  AM</p>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <div className="footer-bottom">
        <div className='navbar'>
        <nav>
          <ul className="left">
            <li>
              <img src={logo} alt="Not found" />
            </li>
          </ul>
          <ul className="mid">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/service">Services</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <ul className="right">
            <p>@ Copyright Finsweet 2021</p>
          </ul>
        </nav>
        </div>
      </div>
    </div>
  );
};
export default Footer;
