import { useEffect } from 'react'
import SignupPage from './components/SignupPage'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Signup = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  })
  return (
    <SignupPage />
  )
}

export default Signup