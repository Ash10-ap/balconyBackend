import React, { useState, useEffect } from "react";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Icons from "./Icons";
import CommonLayout from "./CommanLayout";
import "./Shop.css";
import "./SingleProduct.css";

const ProductDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cart, setCart] = useCart();
  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="Outdoor-main">
        <div className="main_container">
          <CommonLayout/>
            <div className="container">
              <div className="header-component">
                <Navbar />
              </div>
              <Icons/>
              <div className="single-pro-main">
                <div className="detail-and-img">
                  <div className="single-pro-details">
                  <h1>{product.name}</h1>
                  <p id="sp-description">{product.description}</p>
                  <p id="sp-mrp">Rs. {product?.price}</p>
                  <div className="purchase-buttons">
                    {/* <Link to="/cart"> */}
                      <button 
                        id="add-to-cart" 
                        onClick={() => {
                          setCart([...cart, product]);
                          localStorage.setItem("cart", JSON.stringify([...cart, product]));
                          toast.success("Item Added to cart");
                          console.log(cart);
                        }}
                      >
                        ADD To Cart
                      </button>
                    {/* </Link> */}
                    <Link to="/payment">
                      <button id="buy">Buy</button>
                    </Link>
                    </div>
                  </div>
                  <div className="sp-img-div">
                    <img src={`/api/v1/product/product-photo/${product._id}`}
                    alt={product.name} />
                  </div>
                {/* <img
                  src={`/api/v1/product/product-photo/${product._id}`}
                  alt={product.name}
                /> */}
              </div>
            </div>
              {/* <div>
                <h1>Product Details</h1>
                <hr />
                <h6> {product.name}</h6>
                <h6>{product.description}</h6>
                <h6>
                  Rs
                  {product?.price}
                </h6>
                <h6>Category : {product?.category?.name}</h6>
                <button
                  className="btn btn-dark ms-1"
                  onClick={() => {
                    setCart([...cart, product]);
                    localStorage.setItem("cart", JSON.stringify([...cart, product]));
                    toast.success("Item Added to cart");
                    console.log(cart);
                  }}
                >
                  ADD TO CART
                </button>
              </div> */}
            </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
