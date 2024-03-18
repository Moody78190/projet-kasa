import React from 'react';
import '../Assets/Styles/main.scss';
import { Link } from 'react-router-dom';

const Card = ({ title, cover, id }) => (
  <Link className='card' to={`/Rentals/${id}`} >
    <div className='card-content'>
      <h2 className='card-title'>{title}</h2>
      <img src={cover} alt={title} className='card-cover' />
    </div>
  </Link >
);

export default Card;
