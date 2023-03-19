import React from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../context/search";
import "./Shop.css";
import "./Category.css";
import ProductCard from "./ProductCard";

const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <div style={{padding:"30px"}} >
      {/* <div>
        <h1>Search Resuts</h1>
        <h6>
          {values?.results.length < 1
            ? "No Products Found"
            : `Found ${values?.results.length}`}
        </h6>
        <div>
          {values?.results.map((p) => (
            <div style={{ width: "18rem" }}>
              <Link to={`/product/${p.slug}`}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  alt={p.name}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description}</p>
                <p className="card-text"> $ {p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      {/* ------------------------------------------------- */}
    
      {/* <div className="main_container"> */}
        <div className="inside-main">
        <div>
          <h3>Search Resuts</h3>
          <h6>
            {
            values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`
            }
          </h6>
        </div>
          
          <div className="category-middle">
            <div className="category-prod-div">{/* Css in Category.css*/}
            {values?.results.map((p) => (
                  // update-------------------------------
                  <Link key={p._id} to={`/product/${p.slug}`}>
                    <ProductCard
                      key={p._id}
                      img={`/api/v1/product/product-photo/${p._id}`}
                      title={p.name}
                    />
                    <p style={{padding:"0" ,marginTop: "-30px", color:"#62ccbb"}} className="card-text"> 
                      $ {p.price}
                    </p>
                  </Link>
                  //  --------------------------
              ))}
            </div>
          </div>
          </div>
      </div>
    // </div>
  );
};

export default Search;
