import React from 'react'
import'../Assets/Styles/main.scss';
import Logo_footer from'../Assets/images/Logo_footer.png';

const Footer = () => (
    <footer className="footer-container">
     <div className="footer-logo">
        <img src={Logo_footer} alt="Logo Kasa" />
      </div>
        <p className='footer-content'> © 2020 Kasa. All rights reserved</p>
     
    </footer>
  );
  
  export default Footer;