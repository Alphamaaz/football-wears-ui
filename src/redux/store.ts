import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import authReducer from "./loginRedux";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

// ✅ Allow both named and default import styles
export default store;

// ✅ Export RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
