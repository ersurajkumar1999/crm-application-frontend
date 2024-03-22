import Page404 from '../Home/Page404';
import UserLayout from '../User/UserLayout';
import Dashboard from '../User/Dashboard';
import Profile from '../User/Profile';
import Feed from '../User/Feed';
import MyNetwork from '../User/MyNetwork';
import ChatHome from '../User/ChatHome';
import ManagerInvitation from '../User/ManagerInvitation';
import MyConnections from '../User/MyConnections';


const UserRoutes = {
    path: '/',
    element: <UserLayout />,
    children: [
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/profile', element: <Profile /> },
        { path: '/feed', element: <Feed /> },
        { path: '/mynetwork', element: <MyNetwork /> },
        { path: 'connections', element: <MyConnections /> },
        { path: 'invitation-manager', element: <ManagerInvitation /> },
        { path: '/chat', element: <ChatHome /> },
        { path: '*', element: <Page404 /> },
    ]
};


export default UserRoutes;