import React from 'react'
import'../Assets/Styles/main.scss'; 
import Cliffs from '../Assets/images/Cliffs.png';



const Banner = () => (
  <section className="banner">
    <img className='banner-img' src={Cliffs} alt="Logo" />
    <h1 className='banner-text'>Chez vous, partout et ailleurs</h1>
  </section>
);


export default Banner;