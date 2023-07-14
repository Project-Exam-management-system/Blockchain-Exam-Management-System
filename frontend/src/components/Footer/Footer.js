import React from "react";
import "./Footer.css";

const Footer = () => {

  const currYear = new Date().getFullYear();
  return (
    <section className='footer-wrapper'>
    <div className='flexCenter footer-container'>
    <div >
      <div className='footer-line'></div>
      <p>@ {currYear} KNUST EXAMINATIONS CENTER | All Rights Reserved</p>
    
    </div>
    </div>
    </section>
  );
};

export default Footer;
