import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PaginationDetails } from "@type/PaginationDetails";

export interface PageDataState {
  page: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
}

const initialState: PageDataState = {
  page: 1,
  pageSize: 9,
  totalPages: 1,
  totalItems: 0,
};

export const pageDataSlice = createSlice({
  name: "pageData",
  initialState,
  reducers: {
    setPageData(state, action: PayloadAction<PaginationDetails>) {
      state.page = action.payload.page;
      state.pageSize = action.payload.pageSize;
      state.totalPages = action.payload.totalPages;
      state.totalItems = action.payload.totalItems;
    },
  },
});

export const { setPageData } = pageDataSlice.actions;
export default pageDataSlice.reducer;
