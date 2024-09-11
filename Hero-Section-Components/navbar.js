// src/components/Navbar.js
import React from 'react';
// Import the CSS file for styling
import Logo from './atharv.jpg';
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className='logo'>
        < img src={Logo}  alt='logo' style={{width:'150px',height:'150px', borderRadius: '50%',         /* Makes the image circular */
 objectFit: 'cover',        display: 'flex',
  justifyContent: 'center',alignContent: 'flex-start',   marginTop:'5px',   }}/>
        </li>
        <li className="navbar-item">
          <a href="#home" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#about" className="navbar-link">About</a>
        </li>
        <li className="navbar-item">
          <a href="#services" className="navbar-link">Services</a>
        </li>
        <li className="navbar-item">
          <a href="#contact" className="navbar-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
