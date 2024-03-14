import React from 'react';
import PropTypes from 'prop-types';
import Data from '../Assets/Data/data.json';

function Tags({ currentSlide }) {
  const tags = Data[currentSlide].tags; // Récupération des tags pour la diapositive actuelle

  return (
    <div className='Tags'>
      {tags.map((tag, index) => (
        <span key={index} className="tag">{tag}</span>
      ))}
    </div>
  );
}

Tags.propTypes = {
  currentSlide: PropTypes.number.isRequired
};

export default Tags;
