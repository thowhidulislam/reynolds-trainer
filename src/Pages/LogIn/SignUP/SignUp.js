import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: 'true' });

    const handleUserName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleSignUp = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div className='mx-auto w-50 mb-5'>
            <h3 className='text-center my-4'>Sign Up</h3>
            <SocialLogIn></SocialLogIn>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleUserName} type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Accept terms and conditions" />
                </Form.Group>
                <Button disabled={!agree} variant="info" type="submit">
                    Sign Up
                </Button>
            </Form>
            <p className='mt-1'>Already have an account?<Link to='/login' className='text-decoration-none text-info ms-1'>Please login</Link></p>
        </div>
    );
};

export default SignUp;