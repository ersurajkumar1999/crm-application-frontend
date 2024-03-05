import React from 'react';
import HomeLayout from '../Home/Layout';
import Home from '../Home/Home';
import About from '../Home/About';
import Contact from '../Home/Contact';
import Page404 from '../Home/Page404';


const HomeRoutes = {
    path: '/',
    element: <HomeLayout />,
    children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '*', element: <Page404 /> },
    ]
};


export default HomeRoutes;