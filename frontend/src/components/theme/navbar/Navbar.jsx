import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navbar-container'>
    <NavLink to='/' className='navbar-link'>Home</NavLink>
    <NavLink to='/contact-us' className='navbar-link'>Contact Us</NavLink>
    
    
    </div>
      
    </>
  )
}

export default Navbar
