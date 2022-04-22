import React from 'react';
import './GymInfos.css'

const GymInfos = () => {
    return (
        <div className='gym-infos-container mt-5'>
            <div className='info-container d-flex justify-content-between container '>
                <div className='info'>
                    <h2>10</h2>
                    <p>Awards Won</p>
                </div>
                <div className='info'>
                    <h2>250</h2>
                    <p>Workouts</p>
                </div>
                <div className='info'>
                    <h2>310</h2>
                    <p>Satisfied Clients</p>
                </div>
                <div className='info'>
                    <h2>6</h2>
                    <p>Patners Gym</p>
                </div>
            </div>
        </div>
    );
};

export default GymInfos;