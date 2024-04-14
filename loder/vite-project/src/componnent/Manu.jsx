import React from 'react';
import {NavLink } from 'react-router-dom';

const Manu = () => {
    return (
        <div>
            <ul>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/ProfilePage">Profile</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/ContactPage/Dhaka/24/01738908541">Contact</NavLink></li>
            </ul>
        </div>
    );
};

export default Manu;