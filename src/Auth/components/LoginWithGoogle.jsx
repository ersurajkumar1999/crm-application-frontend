import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { UserLoginWithGoogle } from '../../services/ApiService';
import { login } from '../../store/slices/authSlice';
import { useDispatch } from 'react-redux';
import { setErrorMessage, setSuccessMessage } from '../../store/slices/alertMessageSlice';
import { useNavigate } from 'react-router-dom';
import PageLoader from '../../components/common/PageLoader';
import { useState } from 'react';

const LoginWithGoogle = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const handleLoginSuccess = async (credentialResponse) => {
        const accessToken = credentialResponse.credential;
        try {
            setIsLoading(true);
            // Decode the access token to extract user information
            const decodedToken = jwtDecode(accessToken);
            const response = await UserLoginWithGoogle(decodedToken);
            console.log("response==>", response);
            // This is check Only Api Response 
            if (!response.status) {
                dispatch(setErrorMessage(response.data.message));
                return;
            }
            if (!response.data.status) {
                dispatch(setErrorMessage(response.data.message));
                return;
            }
            dispatch(setSuccessMessage(response?.data?.message));
            dispatch(login(response.data.data ?? null));
            navigate('/dashboard');
            setIsLoading(false);
        } catch (error) {
            dispatch(setErrorMessage("Something is Wrong: error" + error));
            setIsLoading(false);
        }
    };
    if (isLoading) {
        return <PageLoader isLoading={isLoading}/>
    }
    return (
        <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
}

export default LoginWithGoogle
