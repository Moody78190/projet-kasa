import React from 'react';

import Data from '../Assets/Data/data.json';
import Star_active from '../Assets/images/Star_active.png';
import Star_inactive from '../Assets/images/Star_inactive.png';

function Rating() {
  const rating = Data.rating;

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

export default Rating;
