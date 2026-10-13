// Root Redux Toolkit Store in TypeScript
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import uiReducer from './slices/uiSlice';
import batchReducer from './slices/batchSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    batch: batchReducer,
  },
  devTools: import.meta.env.MODE !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
