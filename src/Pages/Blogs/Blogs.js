import React from 'react';
import { Container } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <Container className='blogs mb-5'>
            <h3 className='mt-5'>Difference Between Authorization and Authentication</h3>
            <p>In authentication process,the identity of users is verified before they are granted access to the system. While in authorization process,the person's or user's authority to access the resources is validated. Users or individuals are verified throughout the authentication procedure. Users or people are validated throughout this procedure. Authorization normally requires the user's login information. While Authentication requires the user's privileges or security levels.</p>
            <h3 className='mt-5'>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>I am using firebase for my Apps that will require user authentication, data storage, messaging, and usage statistics. There are various ways through which we can achieve authentication,
                <ul className='mt-3'>
                    <li> Cookie-Based authentication</li>
                    <li>Token-Based authentication</li>
                    <li>Third party access(OAuth, API-token)</li>
                    <li>OpenId</li>
                    <li>SAML</li>
                </ul>
            </p>
            <h3 className='mt-5'> What other services does firebase provide other than authentication?</h3>
            <p>Firebase provides the following services other than the authentication:
                <ul className='mt-3'>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Authentication</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </ul>
            </p>
        </Container>
    );
};

export default Blogs;