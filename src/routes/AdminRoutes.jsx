import UserLayout from '../User/UserLayout';
import Mode from '../Admin/Mode';
import UserList from '../Admin/User';
const AdminRoutes = {
    path: '/',
    element: <UserLayout />,
    children: [
        { path: '/mode', element: <Mode /> },
        { path: '/user-list', element: <UserList /> },
    ]
};


export default AdminRoutes;