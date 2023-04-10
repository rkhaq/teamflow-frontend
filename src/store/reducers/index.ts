import { combineReducers } from '@reduxjs/toolkit';
import store from '..';
import authReducer from '../slices/authSlice';

const rootReducer = combineReducers({
  // Add your individual reducers here
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
