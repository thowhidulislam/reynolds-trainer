import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>
        </div>
    );
};

export default Home;