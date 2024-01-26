import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import modeSlice from "./slices/modeSlice";
export const store = configureStore({
  reducer: {
    mode: modeSlice,
    productsInCart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
