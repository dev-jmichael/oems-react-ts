import { PaginationDetails } from "@type/PaginationDetails";

export const isEqualToDefaultPaginationValues = (
  paginationDetails: PaginationDetails,
  defaultPaginationDetails: PaginationDetails
) => {
  const paginationDetailsKeys = Object.keys(defaultPaginationDetails) as Array<
    keyof PaginationDetails
  >;
  return paginationDetailsKeys.every(
    (key) => defaultPaginationDetails[key] === paginationDetails[key]
  );
};
