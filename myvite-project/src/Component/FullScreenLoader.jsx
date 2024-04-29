import React from 'react';

const FullScreenLoader = () => {
    return (
        <div className='container loder'>
            <div className="row ">
                <div className="col-12">
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullScreenLoader;