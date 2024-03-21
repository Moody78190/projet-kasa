import React from 'react';
import PropTypes from 'prop-types';

function Tags({ currentSlide }) {
  
  const tags = currentSlide && currentSlide.tags ? currentSlide.tags : [];

  return (
    <div className='Tags'>
      {tags.map((tag, index) => (
        <span key={index} className="tag">{tag}</span>
      ))}
    </div>
  );
}

Tags.propTypes = {
  currentSlide: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string) 
  })
};

export default Tags;
