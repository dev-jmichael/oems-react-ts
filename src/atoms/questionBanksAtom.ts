import { atom } from "recoil";
import { PaginationDetails } from "../types/PaginationDetails";

export const pageDataState = atom({
  key: "pageData",
  default: {} as PaginationDetails,
});

export const currentPageState = atom({
  key: "currentPage",
  default: 1,
});
