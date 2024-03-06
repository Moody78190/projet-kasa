import React from 'react'
import'../Assets/Styles/main.scss'; 
import Cliffs from '../Assets/images/Cliffs.png';



function Banner() {
  return (
    <section className="banner">
        <img className='banner-img' src={Cliffs} alt="Logo" />
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
  )
}

export default Banner