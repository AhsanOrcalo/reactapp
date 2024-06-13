import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
    isMobileView: false,
    userInfo: '',
    educationInfo:'',
    jobExperience:'',
};

const globalSlice = createSlice({
    name: 'globalSlice',
    initialState: initialState,
    reducers: {
        setIsMobileView: (state, action) => {
            state.isMobileView = action?.payload;
        },
        setUserInfo: (state, action) => {
            state.userInfo = action?.payload;
        },
        setEducationInfo: (state, action) => {
            state.educationInfo = action?.payload;
        },
        setJobExperience: (state, action) => {
            state.jobExperience = action?.payload;
        },

    },
});
export const {
    setIsMobileView,
    setUserInfo,
    setEducationInfo,
    setJobExperience,
} = globalSlice.actions;
export default globalSlice.reducer;