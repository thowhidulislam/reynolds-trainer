import React from 'react';
import { Container } from 'react-bootstrap';
import trainer from '../../images/trainer-image.png'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <Container className='mt-5 about-container mb-5'>
            <div>
                <h2 className='text-center'>Hello, my name is Mike Reynolds, I’m a your new personal trainer!</h2>
            </div>
            <div className='d-flex justify-content-between mt-5'>
                <div className='me-3 w-50'>
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis repellat nostrum debitis perspiciatis quae soluta, voluptatem minima itaque tempora deserunt?</p>
                    <p>GROUP TRAININGS</p>
                    <div className='about-highlight-line mb-3 w-100'></div>
                    <p>NUTRITIONIST</p>
                    <div className='about-highlight-line mb-3 w-50'></div>
                    <p>PHYSIOTHERAPIST</p>
                    <div className='about-highlight-line mb-3 w-75'></div>
                    <p>GROUP TRAININGS</p>
                    <div className='about-highlight-line mb-3 w-50'></div>
                    <p>PERSONAL TRAINING</p>
                    <div className='about-highlight-line mb-3 w-100'></div>
                    <p>MENTORING</p>
                    <div className='about-highlight-line mb-3 w-50'></div>
                </div>
                <div className='w-50 about-image-container'>
                    <img src={trainer} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default AboutMe;