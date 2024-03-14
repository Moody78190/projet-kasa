import React, { useState } from 'react';
import '../Assets/Styles/main.scss';
import arrow_back from '../Assets/images/arrow_back.png';
import arrow_forward from '../Assets/images/arrow_forward.png';
import Tags from './Tags';
import Host from './Host';
import Rating from './Rating';



import Data from '../Assets/Data/data.json';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? Data.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === Data.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <main>
           
            <section className="slider-container">
               <div className="slider-content">
                <div className="slider-navigation">
                <img className='arrow_back' onClick={goToPreviousSlide} src={arrow_back} alt="Left-arrow" />
                <img className='arrow_forward' onClick={goToNextSlide} src={arrow_forward} alt="Right-arrow" />
            </div>
            <div className="slide">
                        <img className='slider-image' src={Data[currentSlide].cover} alt={Data[currentSlide].title}  />
                        <h2 className='slider-title'>{Data[currentSlide].title}</h2>
                        <p className='slider-location'>{Data[currentSlide].location}</p>
                        <Tags currentSlide={currentSlide} />
                        <Host currentSlide={currentSlide} />
                        <Rating currentSlide={currentSlide} />
                        
                        
                    </div>
                </div>

            </section>
        </main>
    );
};

export default Slider;
