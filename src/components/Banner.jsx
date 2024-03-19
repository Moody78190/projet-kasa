import React from 'react'
import'../Assets/Styles/main.scss'; 




const Banner = (props) => (
  <section className="banner">
    <img className='banner-img' src={props.image} alt="Logo" />
    <h1 className='banner-text'>Chez vous, partout et ailleurs</h1>
  </section>
);


export default Banner;