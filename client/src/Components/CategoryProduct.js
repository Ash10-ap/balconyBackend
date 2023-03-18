import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./Shop.css";
import "./Category.css";
import CommonLayout from "./CommanLayout";
import Navbar from "./Navbar";
import Icons from "./Icons";

function CategoryProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  const { type } = useParams();
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
          <h3> {category?.name}</h3>
            <div className="category-middle">
              <div className="category-prod-div">
                {products?.map((p) => (
                  <Link to={`/product/${p.slug}`}>
                    {/* <div key={p._id}>
                      <img
                        src={`/api/v1/product/product-photo/${p._id}`}
                        alt={p.name}
                      />
                      <div>
                        <div>
                          <h5>{p.name}</h5>
                          <h5>{p.price}</h5>
                        </div>
                        <p className="card-text ">
                            {p.description}
                          </p>
                      </div>
                    </div> */}
                    <ProductCard
                          key={p._id}
                          img={`/api/v1/product/product-photo/${p._id}`}
                          title={p.name}
                        />
                    
                  </Link>
                ))}
              </div>
            </div>
          </div>
    </div>
  );
}

export default CategoryProduct;
