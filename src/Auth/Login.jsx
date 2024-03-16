import { useEffect } from 'react'
import LoginPage from './components/LoginPage'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login = () => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    })
    return (
        <LoginPage />
    )
}

export default Login