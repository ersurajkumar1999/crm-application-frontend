import { useRoutes } from 'react-router-dom';

import HomeRoutes from './HomeRoutes';
import AuthRoutes from './AuthRoutes';
export default function ThemeRoutes() {
    return useRoutes([HomeRoutes, AuthRoutes]);
}
