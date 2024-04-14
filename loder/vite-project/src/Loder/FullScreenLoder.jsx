import React from 'react';
import Loder from '../assets/img/lodinganimations.svg';

const FullScreenLoder = () => {
    return (
        <div >
            <div className="container-fluid bg-white" style={{zIndex:"100px", position:"fixed", marginTop:"100px"}}>
                <div className="row d-flex justify-content-center">
                    <div className="col-3">
                        <img src={Loder} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullScreenLoder;