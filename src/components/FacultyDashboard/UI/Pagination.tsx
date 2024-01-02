import { Pagination as Page } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setCurrentPage } from "../../../features/pagination/currentPageSlice";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const PaginationItem: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const dispatch = useDispatch();

  const maxPageButtons = 5;

  const getPaginationRange = () => {
    // Start and end page numbers
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxPageButtons - 1);

    // Adjust the start and end if the current page is near the beginning or end
    if (currentPage < 3) {
      end = Math.min(totalPages, maxPageButtons);
    } else if (currentPage > totalPages - 3) {
      start = Math.max(1, totalPages - maxPageButtons + 1);
    }

    // Generate the range
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  return getPaginationRange().map((pageNumber) => (
    <Page.Item
      key={pageNumber}
      active={pageNumber === currentPage}
      onClick={() => dispatch(setCurrentPage(pageNumber))}
    >
      {pageNumber}
    </Page.Item>
  ));
};

const Pagination: React.FC = () => {
  const currentPage = useSelector((state: RootState) => state.currentPage.value);
  const totalPages = useSelector((state: RootState) => state.pageData.totalPages);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "1em" }}>
      <Page size="lg">
        <Page.Prev
          onClick={() => dispatch(setCurrentPage(currentPage - 1))}
          disabled={currentPage === 1}
        />
        <PaginationItem key={currentPage} currentPage={currentPage} totalPages={totalPages} />
        <Page.Next
          onClick={() => dispatch(setCurrentPage(currentPage + 1))}
          disabled={currentPage === totalPages}
        />
      </Page>
    </div>
  );
};

export default Pagination;
