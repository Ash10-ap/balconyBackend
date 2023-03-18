import React, { useState, useEffect } from "react";
import AdminMenu from "../../Components/Layout/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      <div>
        <AdminMenu />
      </div>
      <div>
        <h1>All Products List</h1>
        <div>
          {products?.map((p) => (
            <Link key={p._id} to={`/dashboard/admin/product/${p.slug}`}>
              <div style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  alt={p.name}
                />
                <div className="card-body">
                  <h5>{p.name}</h5>
                  <p>{p.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
