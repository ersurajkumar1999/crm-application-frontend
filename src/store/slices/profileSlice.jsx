import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profileData: null,
        isLoading: false, // Initial loading state
    },
    reducers: {
        setProfileData: (state, action) => {
            state.profileData = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
});

export const { setProfileData, setLoading } = profileSlice.actions;

export default profileSlice.reducer;
