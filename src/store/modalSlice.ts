// store/modalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  currencySelected: string | null; // State for selected currency
}

const initialState: ModalState = {
  currencySelected: 'usd', // Default to no currency selected
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    selectCurrency(state, action: PayloadAction<string>) {
      state.currencySelected = action.payload; // Update selected currency
    },
    clearCurrency(state) {
      state.currencySelected = null; // Clear selected currency
    },
  },
});

export const { selectCurrency, clearCurrency } = modalSlice.actions;

export default modalSlice.reducer;
