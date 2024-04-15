import React from 'react';
import Footer from './Footer';
import AppNavBar from './AppNavBar';

const MasterLayout = (props) => {
    return (
        <div>
            <AppNavBar/>
                {props.children}
            <Footer/>
        </div>
    );
};

export default MasterLayout;