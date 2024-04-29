import React from 'react';
import AppNavBar from './AppNavBar';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

const MasterLayout = (p) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <AppNavBar/>
                    {
                        p.children
                    }
                    <Footer/>
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default MasterLayout;