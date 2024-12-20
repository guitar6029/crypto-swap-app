// store/modalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  currencySelected: string | null; // State for selected currency
  selectedCoin: string | null;
}

const initialState: ModalState = {
  currencySelected: 'usd', // Default to no currency selected
  selectedCoin: null
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    selectCurrency(state, action: PayloadAction<string>) {
      state.currencySelected = action.payload; // Update selected currency
    },
    selectCoin(state, action: PayloadAction<string>) {
      state.selectedCoin = action.payload;
    },
    clearCurrency(state) {
      state.currencySelected = null; // Clear selected currency
    },
  },
});

export const { selectCurrency, clearCurrency, selectCoin } = modalSlice.actions;

export default modalSlice.reducer;
