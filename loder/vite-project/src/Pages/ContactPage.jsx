import React, { useState } from 'react';
import Manu from '../componnent/Manu';
import { useParams } from 'react-router-dom';

const ContactPage = () => {
    let {city,age,number}=useParams();
    
    return (
        <div>
            <Manu/>
            <h1>This is Contact Page</h1>
            <p>City:{city}</p>
            <p>Age:{age}</p>
            <p>Number:{number}</p>
        </div>
    );
};

export default ContactPage;