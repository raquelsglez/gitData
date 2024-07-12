import { configureStore } from '@reduxjs/toolkit';
import gitUserReducer from './gitUserSlice.js';

export const store = configureStore(
    {
      reducer: {
        gitUser: gitUserReducer,
      },
    }
);
