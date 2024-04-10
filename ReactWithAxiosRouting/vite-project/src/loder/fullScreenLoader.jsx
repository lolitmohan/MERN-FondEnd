import React from 'react';
import loder from '../assets/img/lodinganimated.svg'
const fullScreenLoader = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <img className='w-100' src={loder} alt='lolit'/>
                </div>
            </div>
        </div>
    );
};

export default fullScreenLoader;