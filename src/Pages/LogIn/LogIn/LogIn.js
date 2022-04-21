import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-center my-4'>Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="info" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='mb-0'>Forget Password?<button style={{ paddingLeft: '1px' }} className='btn btn-link text-info text-decoration-none mb-1'>Reset Password</button></p>
            <p>New to Reynolds? <Link to='/signup' className='text-decoration-none text-info'>Please Register</Link></p>
        </div>
    );
};

export default LogIn;