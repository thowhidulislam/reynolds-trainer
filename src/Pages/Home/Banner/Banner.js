import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/banner-image-1.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-text'>
                <h2 className='banner-title'>
                    <span className='banner-title-top'>Mike Reynolds</span><br />
                    <span className='banner-title-bottom'>Your New Personal Trainer</span>
                </h2>
                <h3 className='banner-details text-white'>Are you ready to <span className='text-info'>get fit</span> ,strong and motivated!</h3>
                <div className='d-flex banner-btn mt-2'>
                    <Link to='/signup'>
                        <button className='signup-btn me-4'>SIGN UP</button>
                    </Link>
                    <Link to='/about'>
                        <button className='about-btn'>ABOUT ME</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;