import React, { useState } from "react";
import "../Assets/Styles/main.scss";
import arrow_back from "../Assets/images/arrow_back.png";
import arrow_forward from "../Assets/images/arrow_forward.png";

const Slider = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.pictures.length - 1 : currentSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide(
      currentSlide === data.pictures.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <section className="slider-container">
      {data.pictures.length > 1 ? (
        <div className="slider-navigation">
          <img
            className="arrow_back"
            onClick={goToPreviousSlide}
            src={arrow_back}
            alt="Left-arrow"
          />
          <img
            className="arrow_forward"
            onClick={goToNextSlide}
            src={arrow_forward}
            alt="Right-arrow"
          />
          <span className="slider-counter">
            {currentSlide + 1}/{data.pictures.length}
          </span>
        </div>
      ) : (
        <></>
      )}
      <div className="slide">
        <img
          className="slider-image"
          src={data.pictures[currentSlide]}
          alt={data.title}
        />
      </div>
    </section>
  );
};

export default Slider;
