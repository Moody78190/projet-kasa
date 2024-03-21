import React from 'react';

const Banner = (props) => (
  <section className="banner">
    <img className='banner-img' src={props.image} alt="Logo" />
    {props.showText && <h1 className='banner-text'>Chez vous, partout et ailleurs</h1>}
  </section>
);

export default Banner;
