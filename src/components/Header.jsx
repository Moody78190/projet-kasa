import React from 'react';
import { Link } from 'react-router-dom';
import BigLogo from '../Assets/images/BigLogo.png';
import'../Assets/Styles/main.scss'; 

function Header() {
  return (
    <header>
      <nav className='navbar'>
      <div className="logo">
        <img src={BigLogo} alt="Logo" />
      </div>
        <ul className='links'>
          <li><Link to="/Home">Accueil</Link></li>
          <li><Link to="/About">A propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
