import React from 'react'
import './ProductCard.css';

function ProductCard(props) {
  return (
    
    <div className="product-flex">
        <div className="card-pro-container">
        <img src={process.env.PUBLIC_URL + props.img} alt={props.img} />
            {/* <img src={props.img} alt="props.img" /> */}
            <p>{props.title}</p>
        </div>
    </div>
  )
}

export default ProductCard