import React from 'react';
import PropTypes from 'prop-types';
import Data from '../Assets/Data/data.json';
import Star_active from '../Assets/images/Star_active.png';
import Star_inactive from '../Assets/images/Star_inactive.png';

function Rating({ currentSlide }) {
  const rating = Data[currentSlide].rating; 

  
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index + 1 <= rating) {
      return { type: 'filled', key: index };
    } else {
      return { type: 'empty', key: index };
    }
  });

  return (
    <div className="Rating">
      {stars.map((star) => (
        <img key={star.key} src={star.type === 'filled' ? Star_active : Star_inactive} alt="" />
      ))}
    </div>
  );
}

Rating.propTypes = {
  currentSlide: PropTypes.number.isRequired
};

export default Rating;
