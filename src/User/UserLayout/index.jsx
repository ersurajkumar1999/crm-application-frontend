import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfile } from '../../services/CommonServices';
import { setLoading, setProfileData } from '../../store/slices/profileSlice';
import { logout } from '../../store/slices/authSlice';
import { setClearMessage } from '../../store/slices/alertMessageSlice';

const UserLayout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/auth/login');
        }
    })

    const { profileData } = useSelector((state) => state.profile);

    useEffect(() => {
        if (!profileData) {
            const getProfileData = async () => {
                dispatch(setLoading(true));
                try {
                    const response = await getProfile();
                    if (response.status) {
                        dispatch(setProfileData(response?.data?.data ?? null))
                    }
                } catch (error) {
                    console.log("Error getting profile", error);
                }
                dispatch(setLoading(false));
            }
            getProfileData();
        }
    }, [profileData])
    const handleUserLogout = () => {
        dispatch(logout());
        dispatch(setClearMessage());
    }

    return (
        <>
            <Header handleUserLogout={handleUserLogout}/>
            <Outlet />
        </>
    )
}

export default UserLayout