import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CurrentPageState {
  value: number;
}

const initialState: CurrentPageState = {
  value: 1,
};

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { setCurrentPage } = currentPageSlice.actions;
export default currentPageSlice.reducer;
