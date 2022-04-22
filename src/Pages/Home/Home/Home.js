import React from 'react';
import AboutMe from '../../AboutMe/AboutMe';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import GymInfos from '../GymInfos/GymInfos';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <GymInfos></GymInfos>
        </>
    );
};

export default Home;