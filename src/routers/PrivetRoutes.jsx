import React from 'react'
import { useContext } from 'react'
import { authContext } from '../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

const PrivetRoutes = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const { pathname } = useLocation();
    if (loading) {
        return <Loading />
    }
    else if (!user) {
        return <Navigate state={pathname} to="/login" />
    }
    return children
}

export default PrivetRoutes