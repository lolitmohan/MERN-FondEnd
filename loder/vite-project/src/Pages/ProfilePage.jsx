import React from 'react';
import Manu from '../componnent/Manu';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    let {id,name}=useParams();
    return (
        <div>
            <Manu/>
            <h1>Profile Page</h1>
            <p>ID:{id}</p>
            <p>ID:{name}</p>
        </div>
    );
};

export default ProfilePage;