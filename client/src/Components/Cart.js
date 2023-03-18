import React, { useState, useEffect } from "react";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import DropIn from "braintree-web-drop-in-react";
import "./Shop.css";
import "./Cart.css";

const Cart = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    totalAmount();
  }, [cart, quantity]);
  const totalAmount = () => {
    let price = 0;
    cart.map((item) => {
      price += item.price * quantity;
    });
    setPrice(price);
  };

  //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };
  //get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/braintree/token");
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post("/api/v1/product/braintree/payment", {
        nonce,
        cart,
      });
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="cart-middle">
        <h1>
          {!auth?.user
            ? "Hello Guest"
            : `Hello  ${auth?.token && auth?.user?.name}`}
            <p className="text-center">
              {cart?.length
                ? `You Have ${cart.length} items in your cart ${
                auth?.token ? "" : "please login to checkout !"
              }`
              : " Your Cart Is Empty"}
            </p>
        </h1>
        {cart?.map((p) => (
          <div className="add-to-cart" key={p._id}>
            <Link to={`/product/${p.slug}`}>
              <div className="left-section">
                <img 
                  src={`/api/v1/product/product-photo/${p._id}`}
                  alt={p.name}
                />
              </div>
            </Link>
            <div className="right-section">
              <div className="product-info">
                <h5 className="title">{p.name}</h5>
                <h5>Rs. {p.price * quantity}</h5>
              </div>
              <div className="right-of-right">
                <div className="quantity-section">
                  <button className="minus-btn" onClick={() => handleQuantity("dec")}>-</button>
                  <input type="number" value={quantity} className="product-quantity"/>
                  <button className="add-btn" onClick={() => handleQuantity("inc")}>+</button>
                </div>
                <button className="buy-btn" onClick={() => removeCartItem(p._id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
        <div>
              <h2>Cart Summary</h2>
              <hr />
              <h4>Total : {price} </h4>

              {auth?.user?.address ? (
                <>
                  <div className="mb-3">
                    <h4>Current Address</h4>
                    <h5>{auth?.user?.address}</h5>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  </div>
                </>
              ) : (
                <div className="mb-3">
                  {auth?.token ? (
                    <>
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => navigate("/dashboard/user/profile")}
                      >
                        Update Address
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-outline-warning"
                        onClick={() =>
                          navigate("/login", {
                            state: "/cart",
                          })
                        }
                      >
                        Please Login to checkout
                      </button>
                    </>
                  )}
                </div>
              )}

              <div className="mt-2">
                {!clientToken || !auth?.token || !cart?.length ? (
                  ""
                ) : (
                  <>
                    <DropIn
                      options={{
                        authorization: clientToken,
                        // paypal: {
                        //   flow: "vault",
                        // },
                      }}
                      onInstance={(instance) => setInstance(instance)}
                    />

                    <button
                      onClick={handlePayment}
                      disabled={loading || !instance || !auth?.user?.address}
                    >
                      {loading ? "Processing ...." : "Make Payment"}
                    </button>
                  </>
                )}
              </div>
            </div>
      </div>
      {/* -------------------------------- */}
      
    </>
  );
};

export default Cart;
