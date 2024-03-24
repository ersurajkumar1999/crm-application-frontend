// store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import profileSlice from './slices/profileSlice';
import alertMessageSlice from './slices/alertMessageSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    profile: profileSlice,
    alert: alertMessageSlice
    // Add other reducers here if you have more slices
  },
});
