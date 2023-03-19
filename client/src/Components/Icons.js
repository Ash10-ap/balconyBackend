import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Icons.css"

function Icons() {
  const { pathname } = useLocation();


  return (
        <div className="icons_image">
          <Link to="/types/cart" 
            style={{
              border: pathname==='/types/cart'?'1px solid #62ccbb':'none',
              borderRadius : pathname==='/types/cart'?'50%':'0%',
              boxShadow : pathname==='/types/cart'?'0 4px 6px #ccc':'0'
            }}
          >
            <img src={require('../images/Vector-2.svg').default} alt="Vector-2.svg"  />
          </Link>
          <Link to="/types/account" 
            style={{
              border: pathname==='/types/account'?'1px solid #62ccbb':'none',
              borderRadius : pathname==='/types/account'?'50%':'0%',
              boxShadow : pathname==='/types/account'?'0 4px 6px #ccc':'0'
            }}
          >
            <img src={require('../images/Vector.svg').default} alt="Vector.svg" />
          </Link>
        </div>
  )
}

export default Icons