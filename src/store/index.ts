import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { paintersReducer } from './painters/slice';

export const rootReducer = combineReducers({
  painters: paintersReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });
