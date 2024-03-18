import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Card from './Card';
import Grid from './Grid';
import Slider from './Slider';
import Collapse from './Collapse';
import Tags from './Tags';
import Host from './Host';
import Rating from './Rating';
import Footer from './Footer'; 


const App = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Card />
            <Grid/>
            <Slider/>
            <Collapse />
            <Tags />
            <Host />
            <Rating />
            <Footer />
        </div>
    );
}

export default App;
