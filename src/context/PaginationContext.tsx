import {
  PaginationContextType,
  PaginationDetails,
} from "@type/PaginationDetails";
import React, { useState, createContext } from "react";

const defaultPaginationDetails: PaginationDetails = {
  page: 1,
  pageSize: 9,
  totalPages: 1,
};

const defaultPaginationContext: PaginationContextType = {
  paginationDetails: defaultPaginationDetails,
  setPaginationDetails: () => {
    throw new Error("setPaginationDetails function must be overridden");
  },
  setSelectedPage: () => {
    throw new Error("setPaginationDetails function must be overridden");
  },
};

interface PaginationProviderProps {
  children: React.ReactNode;
}

export const PaginationContext = createContext<PaginationContextType>(
  defaultPaginationContext
);

export const PaginationProvider: React.FC<PaginationProviderProps> = ({
  children,
}) => {
  const [paginationDetails, setPaginationDetails] = useState(
    defaultPaginationDetails
  );

  const handleSetPaginationDetails = (data: PaginationDetails) => {
    setPaginationDetails(data);
  };

  const handleSetSelectedPage = (page: number) => {
    setPaginationDetails({ ...paginationDetails, page: page });
  };

  return (
    <PaginationContext.Provider
      value={{
        paginationDetails,
        setPaginationDetails: handleSetPaginationDetails,
        setSelectedPage: handleSetSelectedPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
