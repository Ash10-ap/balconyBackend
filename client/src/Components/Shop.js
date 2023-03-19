import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Shop.css";

function Shop() {
  const [categories, setCategories] = useState([]);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    // getTotal();
  }, []);
  return (
    // <div>
    //   <div>
    //     {categories?.map((c) => (
    //       <Link
    //       style={{width:"180px",height:"250px"}}
    //        to={`/category/${c.slug}`}>
    //         <button
    //         style={{width:"180px",height:"250px",background:"none",border:"none"}}
    //           key={c._id}
    //           // onChange={(e) => handleFil ter(e.target.checked, c._id)}
    //         >
    //           <img 
    //           style={{width:"inherit"}}
    //           src={process.env.PUBLIC_URL + '../images/QCM15397_1.png'} alt="QCM15397_1" 
    //           />
    //           {c.name}
    //         </button>
    //       </Link>
    //     ))}
    //   </div>
    // </div>
    <div className="main-middle">
            <div className="content">
              <h1>What would you<br/> like to shop?</h1>
              <p>
                The most customised plants decoration you have ever<br/> 
                seen. Pick up yours in 3 simplae steps.
              </p>
            </div>
            <div className="right">
              {/* note:

                  refer indoore className as all
                  populer->Customised
                  and -> Outdoor->corporate
              
              */}
              {categories?.map((c) => (
              <Link className="link-tag"
              to={`/category/${c.slug}`}>
                <button
                  className={c.name}
                  id="shop-img-buttons"
                  key={c._id}
                  // onChange={(e) => handleFil ter(e.target.checked, c._id)}
                >
                  <img className="shop-img"
                  src={process.env.PUBLIC_URL + `../images/${c.name}.png`} alt="QCM15397_1" 
                  />
                  {c.name}
                </button>
              </Link>
            ))}
                
            </div>
          </div>
  );
}

export default Shop;
