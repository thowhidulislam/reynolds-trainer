import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    let errorElement
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(
        auth
    );

    const handleUserName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    let from = location.state?.from?.pathname || "/";
    if (error) {
        errorElement = <p className='text-danger my-1'>Error: {error.message}</p>
    }
    if (user) {
        navigate(from, { replace: true })
    }

    const handleLogIn = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    const handleResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address.')
        }

    }

    return (
        <div className='container w-50 mx-auto mb-5'>
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
            {errorElement}
            <p className='mb-0'>Forget Password?<button onClick={handleResetPassword} style={{ paddingLeft: '1px' }} className='btn btn-link text-info text-decoration-none mb-1'>Reset Password</button></p>
            <p>New to Reynolds? <Link to='/signup' className='text-decoration-none text-info'>Please Register</Link></p>
            <ToastContainer />
        </div>
    );
};

export default LogIn;