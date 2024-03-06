import { useRoutes } from 'react-router-dom';

import HomeRoutes from './HomeRoutes';
import AuthRoutes from './AuthRoutes';
import UserRoutes from './UserRoutes';
export default function ThemeRoutes() {
    return useRoutes([HomeRoutes, AuthRoutes, UserRoutes]);
}
