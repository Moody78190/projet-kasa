import React from 'react';
import Card from './Card';
import Data from '../Assets/Data/data.json';

const GridContainer = () => {
  return (
    <section className="grid-container">
      {Data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          cover={item.cover}
          rating={item.rating}
        />
      ))}
    </section>
  );
};

export default GridContainer;
