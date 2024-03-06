
import Home from '../Home/Home';
import About from '../Home/About';
import Contact from '../Home/Contact';
import Page404 from '../Home/Page404';
import UserLayout from '../User/UserLayout';
import Dashboard from '../User/Dashboard';


const UserRoutes = {
    path: '/',
    element: <UserLayout />,
    children: [
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/home', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '*', element: <Page404 /> },
    ]
};


export default UserRoutes;