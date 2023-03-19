import React, { useState, useEffect } from "react";
import sliderItems from "../data";
import { Link, useParams } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import Navbar from "./Navbar";
import "./Shop.css";
import "./SingleProduct.css";
import Icons from "./Icons";
import CommonLayout from "./CommanLayout";

function SingleProduct({ match }) {
  const { id } = useParams();
  const products = sliderItems.find((p) => String(p.id) === id);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await publicRequest.get("/products/find/" + id);
  //       setProduct(res.data);
  //     } catch {}
  //   };
  //   getProduct();
  // }, [id]);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    // <div>
    //   <div>
    //     <img src={products.img} srcset={products.img} />
    //   </div>
    //   <h1>{products.title}</h1>
    //   <p>{products.desc}</p>
    //   <p>Rs{products.mrp}</p>

    //   <div>
    //     <Link to="/cart">
    //       <button onClick={handleClick}>ADD to cart</button>
    //     </Link>
    //     <Link to="/payment">
    //       <button>buy now</button>
    //     </Link>
    //   </div>
    // </div>

    <div className="Outdoor-main">
      <div className="main_container">
        <CommonLayout></CommonLayout>
          <div className="container">
            <div className="header-component">
              <Navbar />
            </div>
          <Icons></Icons>
          {/* <div className="main-middle"> */}
          <div className="single-pro-main">
            <div className="detail-and-img">
              <div className="single-pro-details">
                <h1>{products.title}</h1>
                <p id="sp-description">{products.desc}</p>
                <p id="sp-mrp">Rs. {products.mrp}</p>
                <div className="purchase-buttons">
                  <Link to="/cart">
                    <button id="add-to-cart" onClick={handleClick}>ADD To Cart</button>
                  </Link>
                  <Link to="/payment">
                    <button id="buy">Buy</button>
                  </Link>
                </div>
              </div>
              <div className="sp-img-div">
                <img src="https://png.pngtree.com/element_our/png/20180928/beautiful-hologram-water-color-frame-png_119551.jpg" srcset={products.img} />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
    </div>
  </div>

  );
}

export default SingleProduct;
