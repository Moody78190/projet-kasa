import React from 'react';
import { Link } from 'react-router-dom';
import Red_Logo from '../Assets/images/Red_Logo.png';

const Navbar = () => (
  <nav className='navbar'>
    <div className="logo">
      <img src={Red_Logo} alt="Logo Kasa" />
    </div>
    <ul className='links'>
      <li><Link to="/">Accueil</Link></li>
      <li><Link to="/About">A propos</Link></li>
    </ul>
  </nav>
);

export default Navbar;
