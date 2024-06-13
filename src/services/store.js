// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { thunk } from "redux-thunk";

// const initialState = {
//     userInfo:{},
//     educationInfo:{},
//     jobExperince:{},
// }
// const SET_USER_INFO = 'SET_USER_INFO';
// const SET_EDUCATION_INFO = 'SET_EDUCATION_INFO';
// const SET_JOB_EXPERINCE = 'SET_JOB_EXPERINCE';

// export const setUserInfo = (data) => {
//     return {
//         type: SET_USER_INFO,
//         payload: data
//     }
// }

// export const setEducationInfo = (data) => {
//     return {
//         type: SET_EDUCATION_INFO,
//         payload: data
//     }
// }

// export const setJobExperience = (data) => ({
//     type: SET_JOB_EXPERINCE,
//     payload: data
//   });

// const formReducer = (state = initialState, action) => {
//     switch(action.type){
//         case SET_USER_INFO:
//             return {
//                 ...state,
//                 userInfo: action.payload
//             }
//         case SET_EDUCATION_INFO:
//             return {
//                 ...state,
//                 educationInfo: action.payload
//             }
//         case SET_JOB_EXPERINCE:
//             return {
//                 ...state,
//                 jobExperince: action.payload
//             }
//         default:
//             return state
//     }
// }

// const rootReducer = combineReducers({
//     form: formReducer
// })

// const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import globalslice from './slices/form'


const rootReducer = {
  globalSlice: globalslice,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
export const RootState = store.getState();
export const AppDispatch = store.dispatch;

export default store;