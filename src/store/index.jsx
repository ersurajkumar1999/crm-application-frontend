// store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import profileSlice from './slices/profileSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    profile:profileSlice
    // Add other reducers here if you have more slices
  },
});
