import React from 'react'
import Buttons from '../../components/Buttons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="container">
            <div className="logo"><span>MOLLA</span></div>
            <div className="nav-links">
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
                <Buttons/>
            </div>

        </div>
    </nav>
    </>
  )
}

export default Navbar