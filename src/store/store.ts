// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice'; // Import your modal slice

const store = configureStore({
  reducer: {
    modal: modalReducer, // Add the modal slice reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
