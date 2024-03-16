// authActions.js

import { login, logout } from '../slices/authSlice';

// Example login action
export const loginUserData = (userData) => (dispatch) => {
    console.log("loginUserData==>",userData);
  // Here you can perform authentication logic, like calling an API
  // Assuming userData contains user information (e.g., username, password)
  
  // After successful authentication, dispatch the login action with user data
  dispatch(login({ user: userData, token: 'your_token_here' }));
};

// Example logout action
export const logoutUser = () => (dispatch) => {
  // Here you can perform logout logic, like clearing local storage, etc.
  
  // Dispatch the logout action
  dispatch(logout());
};
