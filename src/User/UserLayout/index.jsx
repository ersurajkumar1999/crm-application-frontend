import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const UserLayout = () => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/auth/login');
        }
    })
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default UserLayout