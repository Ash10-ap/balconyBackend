import React, { useState, useEffect } from "react";
import UserMenu from "../../Components/Layout/UserMenu";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Link } from "react-router-dom";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <div>
      <div>
        <UserMenu />
      </div>
      <div>
        <h1>All Orders</h1>
        {orders?.map((o, i) => {
          return (
            <div>
              <table>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Status</th>
                    <th scope="col">Buyer</th>
                    <th scope="col"> Date</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{o?.status}</td>
                    <td>{o?.buyer?.name}</td>
                    <td>{moment(o?.createAt).fromNow()}</td>
                    <td>{o?.payment.success ? "Success" : "Failed"}</td>
                    <td>{o?.products?.length}</td>
                  </tr>
                </tbody>
              </table>
              <div>
                {o?.products?.map((p, i) => (
                  <div key={p._id}>
                    <div>
                      <Link to={`/product/${p.slug}`}>
                        <img
                          src={`/api/v1/product/product-photo/${p._id}`}
                          alt={p.name}
                          width="100px"
                          height={"100px"}
                        />
                      </Link>
                    </div>
                    <div>
                      <p>{p.name}</p>
                      <p>{p.description}</p>
                      <p>Price : {p.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
