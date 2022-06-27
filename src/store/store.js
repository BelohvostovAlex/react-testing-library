import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from './reducers/counterSlice';

const rootReducer = combineReducers({
  counter: counterSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
