import React from 'react';
import MasterLayout from '../Component/MasterLayout';
import Verify from '../Component/VerifyForm'
const VerifyPage = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <MasterLayout>
                        <Verify/>
                    </MasterLayout>
                </div>
            </div>
        </div>
    );
};

export default VerifyPage;