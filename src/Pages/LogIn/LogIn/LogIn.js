import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const LogIn = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleUserName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleLogIn = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/home')
    }

    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-center my-4'>Login</h1>
            <SocialLogIn></SocialLogIn>
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="info" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mb-0'>Forget Password?<button style={{ paddingLeft: '1px' }} className='btn btn-link text-info text-decoration-none mb-1'>Reset Password</button></p>
            <p>New to Reynolds? <Link to='/signup' className='text-decoration-none text-info'>Please Register</Link></p>
        </div>
    );
};

export default LogIn;