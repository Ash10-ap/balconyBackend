import React, { useState } from "react";
import "./Shop.css";
import "./Gallery.css";

export default function Gallery() {
  return (
      <div className="main_container">
          <div className="container">
            <div className="gallery-main">
                <div className="upper-four">
                  <img src={process.env.PUBLIC_URL + '../images/indoor.png'} alt='indoor' />
                  <img src={process.env.PUBLIC_URL + '../images/outdoor.png'} alt="outdoor" />
                  <img src={process.env.PUBLIC_URL + '../images/popular.png'} alt="popular" />
                  <img src={process.env.PUBLIC_URL + '../images/limited.png'} alt="limited" />
                </div>
                <div className="middle-img-div">
                <img src={process.env.PUBLIC_URL + '../images/BANNER_1B.jpg'} alt='BANNER_1B' />
                </div>
                <div className="tow-img-div">
                  <img src={process.env.PUBLIC_URL + '../images/QCM15397_1.png'} alt="QCM15397_1" />
                  <img src={process.env.PUBLIC_URL + '../images/QCM15354_1.png'} alt="QCM15354_1" />
                </div>
            </div>
          </div>
      </div>
  );
}
