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

  return Array.from({ length: totalPages }, (_, index) => (
    <Page.Item
      key={index + 1}
      active={index + 1 === currentPage}
      onClick={() => dispatch(setCurrentPage(index + 1))}
    >
      {index + 1}
    </Page.Item>
  ));
};

const Pagination: React.FC = () => {
  const currentPage = useSelector((state: RootState) => state.currentPage.value);
  const totalPages = useSelector((state: RootState) => state.pageData.totalPages);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "1em" }}>
      <Page size="lg">
        <PaginationItem key={currentPage} currentPage={currentPage} totalPages={totalPages} />
      </Page>
    </div>
  );
};

export default Pagination;
