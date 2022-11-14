import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../Components/PrimaryButton/PrimaryButton';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center' style={{ height: '100vh', width: "100vw" }}>
            <p>  404 YUR PAGE NOT FOUND</p>
            <PrimaryButton><Link to='/'>BACkTOHOME</Link></PrimaryButton>
        </div>
    );
};

export default ErrorPage;