import React, { useState } from "react";
import Hero_img from "../../imgs/Hero.png";
import Hero_logo from "../../imgs/KNUSTlogo.png";
import Arrow from "../../imgs/arrow.png";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const [click, setClick] = useState(false);

  const closeMenu = () => setClick(false);

  return (
    <section className="hero-wrapper flex-1">
      <div className="flexCenter hero-container">
        <div className="paddings flexCenter hero-left">
      
          <div className="hero-logo">
            <img src={Hero_logo} alt="" />
          </div>

          <div className="hero-head">
            <h1 className="main-head">
        KNUST EXAMINATIONS <span>CENTER</span>
          </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <Link to="choose">
              <button className="button">CLICKME</button>
            </Link>
        </div>
     <div className="Card-wrapper">
        <div className=" flexCenter Card-container">
           Card
        </div>
        <div className=" flexCenter Card-container">
           Card
        </div>
        <div className=" flexCenter Card-container">
           Card
        </div>
        <div className=" flexCenter Card-container">
           Card
        </div>
        </div>

        </div>
        

        <div className="hero-right">
          <div className="hero-rbg">
            <div className="image-container ">
              <img src={Hero_img} alt="" />
          </div> 
          </div>
        </div>

        
    </div>
        
    
    </section>
  );
};

export default Hero;
