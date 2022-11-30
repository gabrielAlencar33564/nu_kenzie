import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from "./features/transactions/transactionSlice";

export const store = configureStore({
  reducer: {
    transaction: transactionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
