import React from 'react'
import'../Assets/Styles/main.scss'; 
import Cliffs from '../Assets/images/Cliffs.png';



function Banner() {
  return (
    <div className="banner">
        <img className='banner-img' src={Cliffs} alt="Logo" />
      </div>
  )
}

export default Banner