import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Loader from '../../shared/Loader/Loader';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    console.log(user)
    const location = useLocation()
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;