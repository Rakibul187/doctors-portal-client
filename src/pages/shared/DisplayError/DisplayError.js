import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const DisplayError = () => {
    const error = useRouteError()
    const { logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }

    return (
        <div className='w-full h-[80vh] gap-2 flex flex-col justify-center items-center' id="error-page">
            <h1 className='text-red-300 text-3xl'>Oops!</h1>
            <p className='text-red-400'>Sorry, an unexpected error has occurred.</p>
            <p className='text-red-600' >
                <i>{error.statusText || error.message}</i>
            </p>
            <p>Please  <Link to='/login'><button onClick={handleLogout} className='btn btn-ghost btn-outline'>LogOut</button> </Link>& Login</p>
        </div>
    );
};

export default DisplayError;