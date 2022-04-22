import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container id='services' className='mt-5' >

            <h2 className='text-center services-title'>Services</h2>

            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }

        </Container>

    );
};

export default Services;