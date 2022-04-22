import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <Container className='mt-5 about-container mx-auto'>
            <div className=' mt-5'>
                <div className='me-3'>
                    <h2 className='text-center'>About Me</h2>
                    <p>My current goal is to become a junior web developer. However, within the next five years, I hope to be a senior web developer at any reputable IT company in Bangladesh or elsewhere in the globe. I am determined about achieving my goal of becoming a web developer.  It doesn't matter to me how many hours I have to work. I'll keep working hard as long as I don't reach the top.</p>

                </div>
            </div>
        </Container>
    );
};

export default AboutMe;