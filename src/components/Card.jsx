import React from 'react';
import '../Assets/Styles/main.scss';

const Card = ({ title, cover, rating }) => (
  <div className='card'>
    <div className='card-content'>
     <h2 className='card-title'>{title}</h2>
    <img src={cover} alt={title} className='card-cover' />
      </div>
  </div>
);

export default Card;
