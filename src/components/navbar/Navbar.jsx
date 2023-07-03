import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <div className='navbar'>
        <Link to={"/"} > <h2 className='logo'>Bloom</h2> </Link>

      <div className='signup'>
        {/* <button>Create account</button> */}
        <p className='nav-text'>We are launching soon 😉</p>
      </div>
    </div>
  )
}

export default Navbar