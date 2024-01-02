import { configureStore } from "@reduxjs/toolkit";
import currentPageReducer from "../features/pagination/currentPageSlice";
import pageDataReducer from "../features/pagination/pageDataSlice";

export const store = configureStore({
  reducer: {
    currentPage: currentPageReducer,
    pageData: pageDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
