import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IArrayTransactions, ITransaction } from "./interfaces";

const initialState: IArrayTransactions = {
  value: [],
};

export const trasactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    createTransaction: (state, action: PayloadAction<ITransaction>) => {
      state.value.push(action.payload);
    },
    removeTransaction: (state, action: PayloadAction) => {
      // state.value = state.value.filter(
      //   // (elemn) => elemn.uuid !== action.payload.uuid,
      // );
    },
  },
});

export const { createTransaction, removeTransaction } = trasactionSlice.actions;
export default trasactionSlice.reducer;
