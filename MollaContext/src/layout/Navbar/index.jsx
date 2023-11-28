import React from 'react'
import Buttons from '../../components/Buttons'
import { Link, NavLink } from 'react-router-dom'
import "./index.scss"

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="container">
          <div className="navbar">
            <div className="logo"><Link to={"/"}><img src="https://portotheme.com/html/molla/assets/images/logo.png" alt="" /></Link></div>
            
            <div className="buttonss">
            <Buttons/>
            </div>
          </div>

        </div>
    </nav>
    </>
  )
}

export default Navbar