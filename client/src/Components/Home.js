import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import FullScreenPopUp from "./FullScreenPopUp";
import MenuIcon from '@mui/icons-material/Menu';
// import Navbar from "./Navbar";
// import sliderItems from "../data";
// import Footer from "./Footer";
import "./Home.css";
// import { Link } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';
// import FullScreenPopUp from './FullScreenPopUp.js';

function Home() {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);
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
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  console.log(products, "products");

  // filter by cat
  const handleFilter = async (category) => {
    // console.log(category);
    const { data } = await axios.get(
      `http://localhost:5500/api/v1/product/product-category/${category}`
    );
    // console.log({ data });
    setShow(false);
    setData(data.products);
  };
  console.log(data);
  // console.log(data.category.name);
  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    if (value) filterProduct();
  }, [value]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        value,
      });
      setProducts(data?.products);
      console.log(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  // login and register........
  const [showPopup, setShowPopup] = useState(false);
  const [button1, setButton1] = useState({ background: "white",color:"#62ccbb" });
  const [button2, setButton2] = useState({ background: "white",color:"#62ccbb" });
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);


  // -----------------------------------------------------------------------------------

//   const [items, setItems] = useState(sliderItems);

//   //slider/ carousel state
  const [imgs,setImgs]=useState(0);
  const [imgs1,setImgs1]=useState(1);
  const [imgs2,setImgs2]=useState(2);
  const[slide]=useState([
    'Images/IMG_2189_1.png',
    'Images/IMG_3688_1.png',
    'Images/IMG_9051_1.png'
  ]);

//   const [showPopup, setShowPopup] = useState(false);
//   const [button1, setButton1] = useState({ background: "white",color:"#62ccbb" });
//   const [button2, setButton2] = useState({ background: "white",color:"#62ccbb" });
//   const [showLogin, setShowLogin] = useState(false);
//   const [showRegister, setShowRegister] = useState(false);

//   // new arrivals button toggle

//   const [active, setActive] = useState("all");

//   const handleClick = (buttonName) => {
//     setActive(buttonName);
//     setItems(sliderItems);
//   };

  const handleButton1Click = () => {
    setButton1({ background: "#62ccb6",color:"white" });
    setButton2({ background: "white",color:"#62ccbb" });
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleButton2Click = () => {
    setButton1({ background: "white",color:"#62ccbb" });
    setButton2({ background: "#62ccb6",color:"white" });
    setShowLogin(false);
    setShowRegister(true);
  };

//   const filterItem = (buttonName,categItem) => {
//     setActive(buttonName);
//     const updatedItems = sliderItems.filter((e) => {
//       return e.category === categItem;
//     });
//     setItems(updatedItems);
//   };

// //   var img_data=[
// //     'Images/IMG_2189 1.png',
// //     'Images/IMG_3688 1.png',
// //     'Images/IMG_9051 1.png'
// // ]

  var u1=useEffect(()=>{
    setInterval(()=>{
      setImgs(imgs=>imgs<2?imgs+1:0)
    },5000)
  },[u2,u3])

  var u2=useEffect(()=>{
    setInterval(()=>{
      setImgs1(imgs1=>imgs1<2?imgs1+1:0)
    },5000)
  },[u3,u1])

  var u3=useEffect(()=>{
    setInterval(()=>{
      setImgs2(imgs2=>imgs2<2?imgs2+1:0)
    },5000)
  },[u1,u2])

//   // full screen popup
  const [showPopUp, setShowPopUp] = useState(false);

  // ------------------------------------------------------------------------

  return (
    <div id="scrol-top">
      <FullScreenPopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
      {/* header */}

      <div className="header">
        <div className="header-of-nav-div">
          <nav className="menu-nav">
            <MenuIcon onClick={() => setShowPopUp(true)} ></MenuIcon>
          </nav>
          <nav className="nav1">
            <a href="#">
              <img src="images/vector-3.svg" alt="vector-3"/>
            </a>
            <a href="#">
              <img src="images/Group-1.svg" alt="Group-1"/>
            </a>
            <a href="#">
              <img src="images/vector-4.svg" alt="vector-4"/>
            </a>
            <a href="#">
              <img src="images/vector-5.svg" alt="vector-5"/>
            </a>
          </nav>
          <picture className="green-logo">
            <img src="images/Green-logo.svg" alt="logo"/>
          </picture>
          <nav className="nav2">
            {/* update line:115-120 */}
            <a href="#"
            style={{
              display:"none"/* note: display:login?'block':'none'  --- login=true*/ 
            }}
            >
              <p id="logout" >Logout</p>
            </a>
            {/* update line:122-127 */}
            <a href="#"
              style={{
                display:"block" /* note: display:logout?'block':'none'  */
              }}
            >
              <img onClick={() => setShowPopup(true)} src="images/Vector.svg" alt=""/>
              
              {/* login page popup */}
              
              {showPopup && (
                <div className="popup-container">
                  <div className="popup">
                    <button
                      onClick={() => setShowPopup(false)}
                      className="close-button"
                    >
                      &times;
                    </button>
                    <div className="toggle-button">
                      <button style={{ background: button1.background,color:button1.color }} onClick={handleButton1Click} type="submit" >Login</button>
                      <button style={{ background: button2.background,color:button2.color }} onClick={handleButton2Click} type="submit" >Register</button>

                      {/* register */}

                      {showRegister && (
                          <div>
                              <input id="popup-name" type="text" placeholder="Name" />
                              <input id="popup-mail" type="email" placeholder="Email" />
                              <input id="popup-num" type="number" placeholder="Number"/>
                              <input id="popup-psd" type="password" placeholder="Password" />
                              <button id="popup-btn" type="submit">Proceed</button>
                          </div>
                        )}
                    </div>

                        {/* login */}
                    {showLogin && (
                      <form>
                        <input id="popup-name" type="text" placeholder="Email/Number" />
                        <input id="popup-psd" type="password" placeholder="Password" />
                        <button id="popup-btn" type="submit">Proceed</button>
                      </form>
                    )}

                  </div>
                </div>
              )}

            </a>
            <a id="bag-icon" href="#">
              <img src="images/vector-2.svg" alt=""/>
            </a>
          </nav>
        </div>
        
        <nav className="header-elements">
            <Link to="/">Home</Link>
            <Link to="/types/shop">Shop</Link>
            <Link to="/types/gallery">Gallery</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/types/contact">Contact Us</Link>
        </nav>
      </div>

      {/* slider/ carousel */}
      <div className="carousel-inner">
          <div className="txt-and-slider-div">
            <div className="slidre-txt">
              <img src="images/the_behind_TBL_font.svg" alt="The Balcony life img"/>
            </div>
            <div className="all-imgs">
              <div className="slider-img1">
                <img id="slider-img1" src={slide[imgs]} alt={slide[imgs]} />
              </div>
              <div className="slider-img2">
                <img id="slider-img2" src={slide[imgs1]} alt={slide[imgs]} />
              </div>
              <div className="slider-img3">
                <img id="slider-img3" src={slide[imgs2]} alt={slide[imgs]} />
              </div>
            </div>
          </div>
      </div>

      {/* new Arrivals */}
              
      <div className="new-arrivals">
          <div className="arrivals-text">
            <h4>NEW ARRIVALS</h4>
            <small>Nice top trendy plants and flowers</small>
          </div>
        <div className="options">
          {categories?.map((c) => (
            <button key={c._id} onClick={(e) => handleFilter(c.name)}>
              {c.name}
            </button>
          ))}
        </div>

        {/* <div> */}
          <div>
            {/* {show &&
              products?.map((p) => (
                <Link to={`/product/${p.slug}`}>
                  <div key={p._id}>
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      alt={p.name}
                    />
                    <div>
                      <div>
                        <h5>{p.name}</h5>
                        <h5>Rs {p.price}</h5>
                      </div>

                      <p>{p.colors}</p>
                    </div>
                  </div>
                </Link>
              ))} */}
          </div>

          {/* product card */}

          <div className="arrival-main">
            {show &&
              products?.map((p) => (
                <div className="card-container">
                  <div className="card-img-container">
                    <a href={`/product/${p.slug}`}>
                      <img id="pro-img"
                        src={`/api/v1/product/product-photo/${p._id}`}
                        alt={p.name} 
                      />
                    </a>
                    {/* update  line:251-255*/}
                    {/* <div className="colors-container">
                      <p>Available Colors</p>
                      <button id="color" >{p.colors}</button>
                    </div> */}
                  </div>
                  <div className="pro-details-container">
                    <h4>{p.name}</h4>
                    <h3>RS {p.price}</h3>
                  </div> 
                </div>
              ))}
          </div>

          <div>
            {data?.map((item, index) => {
              return (
                <Link to={`/product/${item.slug}`}>
                  <div key={index}>
                    <img
                      src={`/api/v1/product/product-photo/${item._id}`}
                      alt={item.name}
                    />
                    <div>
                      <div>
                        <h5>{item.name}</h5>
                        <h5>Rs {item.price}</h5>
                      </div>
                      <p>{item.colors}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

    {/* footer */}
    <Footer />
  </div>
  );
}

export default Home;
