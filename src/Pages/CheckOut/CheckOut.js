import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CheckOut = () => {
    return (
        <div className='w-50 mx-auto checkout mb-5'>
            <h2 className=' my-4'>Provide Your Information</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Enter mobile number" />
                </Form.Group>
                <Button variant="info" type="submit">
                    Save
                </Button>
            </Form>
        </div>
    );
};

export default CheckOut;