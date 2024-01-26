import { PayloadAction, createSlice } from "@reduxjs/toolkit";
let initialState = {
  mode: "light",
};
export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
  },
});
export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;
