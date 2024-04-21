import React from 'react';
import Footer from './Footer';
import AppNavBar from './AppNavBar';
import {Toaster} from "react-hot-toast";

const MasterLayout = (props) => {
    return (
        <div>
            <AppNavBar/>
                {props.children}
                <Toaster position="bottom-center"/>
            <Footer/>
        </div>
    );
};

export default MasterLayout;