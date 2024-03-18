import React, { useState } from 'react';
import '../Assets/Styles/main.scss';
import arrow_back from '../Assets/images/arrow_back.png';
import arrow_forward from '../Assets/images/arrow_forward.png';
// import Tags from './Tags';
// import Host from './Host';
// import Rating from './Rating';



// import Data from '../Assets/Data/data.json';

const Slider = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentSlide((currentSlide === 0 ? data.pictures.length - 1 : currentSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((currentSlide === data.pictures.length - 1 ? 0 : currentSlide + 1));
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
                        <img className='slider-image' src={data.pictures[currentSlide]} alt={data.title} />
                        <h2 className='slider-title'>{data.title}</h2>
                        <p className='slider-location'>{data.location}</p>
                        {/* <Tags currentSlide={currentSlide} />
                        <Host currentSlide={currentSlide} />
                        <Rating currentSlide={currentSlide} /> */}


                    </div>
                </div>

            </section>
        </main>
    );
};

export default Slider;
