import React from 'react';
import MasterLayout from '../Component/MasterLayout';
import Login from '../Component/LoginForm'
const LoginPage = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <MasterLayout>
                        <Login/>
                    </MasterLayout>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;