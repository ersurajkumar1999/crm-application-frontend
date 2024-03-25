import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        error: null,
        success: null
    },
    reducers: {
        setSuccessMessage: (state, action) => {
            state.error = null;
            state.success = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.success = null;
            state.error = action.payload;
        },
        setClearMessage: (state) => {
            state.success = null;
            state.error = null;
        },
    },
});

export const { setSuccessMessage: setSuccessMessage, setErrorMessage, setClearMessage } = alertSlice.actions;

export default alertSlice.reducer;
