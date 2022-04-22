import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, id, price, description, img } = service
    return (
        <Row>
            <Col>
                <div>
                    <div className='d-flex mt-5 service-container'>
                        <img src={img} alt="" className='me-5 service-image' />
                        <div>
                            <h3 className='service-title'>{name}</h3>
                            <p>{description}</p>
                            <div className='d-flex price-enroll-container w-75 mt-5'>
                                <div className='w-50 price'>
                                    <h3 className='text-center mt-1'>${price} </h3>
                                </div>
                                <div className='w-50 enroll'>
                                    <Link to='/checkout'><button className='enroll-btn w-100'>
                                        <span className='text-center'>Enroll</span></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </Col>
        </Row>
    );
};

export default Service;