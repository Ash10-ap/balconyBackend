import React, { useEffect, useState } from "react";
import "./CommanLayout.css";

function CommonLayout({index}) {

  const [img] =useState([
    '../images/ALL_TYPE.svg',
    '../images/CONTACT_US.svg',
    '../images/GALLERY.svg',
    '../images/WELCOME.svg',
  ],[]);

  return (
        <div className="left">
          <div className="logo">
            <img src="/images/logo.png" alt="logo.png" />
          </div>
          <span className="span-img">
          {/* <img srcSet={img_name[index]} alt={img_name[index]}/> */}
            <img src={process.env.PUBLIC_URL + img[index]} alt={img[index]}/>
            {/* <img src={require(img_name[index]).default} alt="img_name[index]"/> */}
          </span>
        </div>
  )
}

export default CommonLayout