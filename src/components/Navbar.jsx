import React from 'react';
import { NavLink } from 'react-router-dom';
import Red_Logo from '../Assets/images/Red_Logo.png';

const Navbar = () => (
  <nav className='navbar'>
    <div className="logo">
      <NavLink to="/">
        <img src={Red_Logo} alt="Logo Kasa" />
      </NavLink>
    </div>
    <ul className='links'>
      <li><NavLink to="/">Accueil</NavLink></li>
      <li><NavLink to="/About">A propos</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
