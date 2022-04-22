import React from 'react';
import { Container } from 'react-bootstrap';
import notFound from '../../../images/404NotFound.png'

const NotFound = () => {
    return (
        <Container>
            <div className='text-center my-5'>
                <img src={notFound} alt="" />
            </div>
        </Container>
    );
};

export default NotFound;