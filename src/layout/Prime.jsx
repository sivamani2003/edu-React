import React from 'react';
import Navbar from '../pages/navBar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/footer/Footer';

const Prime = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Prime;