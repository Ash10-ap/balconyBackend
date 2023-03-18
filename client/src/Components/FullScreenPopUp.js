import React, { useState } from "react";
import { Link } from "react-router-dom";

const FullScreenPopUp = ({ showPopUp, setShowPopUp }) => {
  return (
    <>
      {showPopUp && (
        <div
          style={{
            zIndex:"10",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#62ccbb",
              width: "100%",
              height: "100%",
              color:"white",
              fontSize:25,
              fontWeight:"bold",
              opacity:"80%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {/* Cross /delete */}
            <div
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                fontSize: 20,
                color:"white",
                cursor: "pointer",
              }}
              onClick={() => setShowPopUp(false)}
            >
              X
            </div>
            <div style={{ textAlign: "center" }}>
              <Link to={"/"}>Home</Link>
            </div>
            <div style={{ textAlign: "center" }}>
              <Link to={"/types/shop"}>Shop</Link>
            </div>
            <div style={{ textAlign: "center" }}>
              <Link to={"/types/gallery"}>Gallery</Link>
            </div>
            <div style={{ textAlign: "center" }}>
              <Link to={"/types/blog"}>Blog</Link>
            </div>
            <div style={{ textAlign: "center" }}>
              <Link to={"/types/contact"}>Contact us</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreenPopUp;
