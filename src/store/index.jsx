// store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here if you have more slices
  },
});
