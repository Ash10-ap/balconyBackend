import React, { useState } from "react";
import sliderItems from "../data";
import "./Shop.css";
import "./Category.css";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
export default function All() {
  const [items, setItems] = useState(sliderItems);
  const filterItem = (categItem) => {
    const updatedItems = sliderItems.filter((e) => {
      return e.category === categItem;
    });
    setItems(updatedItems);
  };
  return (
      <div className="main_container">
          <h3>All Type</h3>
          <div className="category-middle">
            <div className="category-prod-div">{/* Css in Category.css*/}
              {items.map((e) => {
                const { id, title, img } = e;
                return (
                  // update-------------------------------
                  <Link key={id} to={`../product/${id}`}>
                    <ProductCard
                      key={id}
                      img={img}
                      title={title}
                    />
                  </Link>
                            //  --------------------------
                );
              })}
            </div>
          </div>
      </div>
  );
}
