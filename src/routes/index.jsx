import { useRoutes } from 'react-router-dom';

import HomeRoutes from './HomeRoutes';
import AuthRoutes from './AuthRoutes';
import UserRoutes from './UserRoutes';
import AdminRoutes from './AdminRoutes';
export default function ThemeRoutes() {
    return useRoutes([HomeRoutes, AuthRoutes, UserRoutes, AdminRoutes]);
}
