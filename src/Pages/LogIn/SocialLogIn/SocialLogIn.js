import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/social/google-logo.png'

const SocialLogIn = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 fs-4 d-block mx-auto my-2'>
                    <img className='mb-1' style={{ width: '30px' }} src={google} alt="" />
                    <span> Google</span></button>
            </div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className=' mt-3 mx-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
        </div >
    );
};

export default SocialLogIn;