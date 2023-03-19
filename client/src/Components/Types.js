import React, { useState } from "react";
import sliderItems from "../data";
import Navbar from "./Navbar";
import "./Shop.css";
import "./Category.css";
import Icons from "./Icons";
import CommonLayout from "./CommanLayout";
import { useParams } from "react-router-dom";
import All from "./All";
import Shop from "./Shop";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Blog from "./Blog";
import Customised from "./Customised";
import Corporate from "./Corporate";
import Footer from "./Footer";
import Cart from "./Cart";
import Account from "./Account";
import Search from "./Search";
import CategoryProduct from "./CategoryProduct";

export default function Types() {


  const [items, setItems] = useState(sliderItems);
  const filterItem = (categItem) => {
    const updatedItems = sliderItems.filter((e) => {
      return e.category === categItem;
    });
    setItems(updatedItems);
  };

  const { type } = useParams();

  function renderComponent(){
    {{console.log(type)}}
    switch (type) {
      case 'shop':
        return <Shop />;
      case 'blog':
        return <Blog />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      case 'all':
        return <All />;
      case 'customised':
        return <Customised />;
      case 'corporate':
        return <Corporate />;
      case 'cart':
        return <Cart />;
      case 'account':
        return <Account />;
      case 'search':
        return <Search />;
      default:
        return <h1 style={{color:'red',top:0}}>Page not Found: Go throuh Proper Routes</h1>;
    }
  }

  // pass value to commonLayout

  let index;
  if (type === 'all') {
    index = 0;
  } else if (type === 'contact') {
    index = 1;
  } else if (type === 'gallery') {
    index = 2;
  } else {
    index = 3;
  }

  return (

    <>
      <div className="main_container">
        <CommonLayout index={index} />
        <div className="container">
          <div className="header-container"
            style={{
              position:type=='contact'?'absolute':'static',
              position:type=='blog'?'absolute':'static'
            }}>
            <Navbar pathname={type}/>
          </div>
          <Icons></Icons>
          <div className="category-middle">
            {renderComponent()}
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}
