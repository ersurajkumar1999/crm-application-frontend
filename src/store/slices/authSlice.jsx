import { createSlice } from '@reduxjs/toolkit';

// Retrieve user data and token from local storage
const userDataFromStorage = localStorage.getItem('userData');
const tokenFromStorage = localStorage.getItem('token');

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: !!userDataFromStorage && !!tokenFromStorage,
        user: userDataFromStorage ? JSON.parse(userDataFromStorage) : null,
        token: tokenFromStorage,
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.token = action.payload.token;
            // // Store user data and token in local storage
            localStorage.setItem('userData', JSON.stringify(action.payload));
            localStorage.setItem('token', action.payload.token);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            // Remove user data and token from local storage
            localStorage.removeItem('userData');
            localStorage.removeItem('token');
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
