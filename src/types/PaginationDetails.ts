export interface PaginationDetails {
    page?: number,
    pageSize?: number,
    totalPages?: number,
    totalItems?: number
}

export interface PaginationContextType {
    paginationDetails: PaginationDetails;
    setPaginationDetails: (data: PaginationDetails) => void;
    setSelectedPage: (page: number) => void;
}