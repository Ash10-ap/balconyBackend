import React from "react";
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Footer() {
  return (
    <div className="footer-main-container">
      <div className="main-div">
        <div className="img-lft-div">
          <img className="img1" src={process.env.PUBLIC_URL + '../images/Group_30.png'} alt='Group 30' />
        </div>
        <div className="tow-div" >
          <div className="mail-logo">
            <img src={process.env.PUBLIC_URL + '../images/letter.svg'} alt='letter' />
          </div>
          <div className="subscribe-div">
            <h1 className="sub-text">SUBSCRIBE <span>NEWSLETTER</span></h1>
          </div>
          <small className="small-tag">
            join our private community Specialones. We'll send you<br/>
            curated offers, insights once in a month.
          </small>
          <div className="email-input-div">
            <input type="email" id="mail" name="mail" placeholder="Enter your email id here"/>
            <button id="subscribe-button" name="subscribe-button">Subscribe Now</button>
          </div>
          <div className="logos-div">
            <InstagramIcon id="i"></InstagramIcon>
            <FacebookIcon id="f"></FacebookIcon>
            <LinkedInIcon id="l"></LinkedInIcon>
            <WhatsAppIcon id="w"></WhatsAppIcon>
          </div>
        </div>
        <div className="img-ryt-div">
        <img className="img2" src={process.env.PUBLIC_URL + '../images/Group_29.png'} alt='Group 29' />
        </div>
      </div>

      {/* BOTTOM PART OF THE FOOTER */}
      
      <div className="bottom-div">
        <section className="col1">
          <img id="logo" src={process.env.PUBLIC_URL + '../images/Logo_black&white.svg'} alt='Logo black&white' />
          <small id="text">
            <p>
            the uniqueness you never<br/>
            seen before. Here at the balcony<br/> 
            life we aspire to be creative and<br/>
            trendy.
            </p>
          </small>
        </section>
        <div className="links-section">
          <section className="col2">
            <header id="header-comn">
              QUICK LINKS
            </header>
            <nav id="nav">
              <a href="#">Best Sellers</a>
              <a href="#">Gallery</a>
              <a href="#">Shop</a>
              <a href="#">Contact Us</a>
            </nav>
          </section>
          <section className="col3">
            <header id="header-comn">
              USEFUL LINKS
            </header>
            <nav id="nav">
              <a href="#">Home</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Condition</a>
            </nav>
          </section>
          <section className="col4">
            <header id="header-comn">
              OUR STORES
            </header>
            <nav id="nav">
              <a href="#">All Category</a>
              <a href="#">Customised</a>
              <a href="#">Corporate Orders</a>
            </nav>
          </section>
        </div>

        {/* Payment section */}
        <div className="payment-section">
          <header align="left" id="header">
            PAYMENT OPTIONS
          </header>
          <picture className="payment-logo-div">
            <img id="payment-logo" src={process.env.PUBLIC_URL + '../images/Payment.svg'} alt='Payment' />
          </picture>
        </div>  
      </div>

      {/* copywrite section */}
      
      <footer className="copyright">
        <div className="cr-left">
          <p>Copyright 2022 The Blacony Life.All Rights Reserved</p>
        </div>
        <span>
          <a href="#scrol-top">
            <ArrowUpwardIcon id="up-arrow" ></ArrowUpwardIcon>
          </a>
        </span>
        <div className="element-to-right">
          <p>Legal Information</p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
