import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './HomeDashboard.css'

const HomeDashboard = () => {

    const { user } = useAuth();

    return (
        <div className='dashboard-home'>
            <h4>Welcome {user.displayName} to your Dashboard!</h4>
            <p>You Can Explore your data in your dashboard.</p>
        </div>
    );
};

export default HomeDashboard;