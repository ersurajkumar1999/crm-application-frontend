import React from 'react';
import HomeLayout from '../Home/Layout';
import Page404 from '../Home/Page404';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';


const AuthRoutes = {
    path: '/',
    element: <HomeLayout />,
    children: [
        { path: '/auth', element: <Login /> },
        { path: '/auth/login', element: <Login /> },
        { path: '/auth/signup', element: <Signup /> },
        { path: '*', element: <Page404 /> },
    ]
};


export default AuthRoutes;