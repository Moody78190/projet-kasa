import React from 'react';
import PropTypes from 'prop-types';
import Data from '../Assets/Data/data.json';

function Host({ currentSlide }) {
  const hosts = Data[currentSlide].host; // Récupération des données de l'hôte pour la diapositive actuelle

  return (
    <section className='Host'>
      <h3 className='host-title'>{hosts.name}</h3>
      <img className='host-img' src={hosts.picture} alt={hosts.name} />
    </section>
  );
}

Host.propTypes = {
  currentSlide: PropTypes.number.isRequired
};

export default Host;
