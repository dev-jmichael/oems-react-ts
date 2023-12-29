import { Pagination } from "react-bootstrap";

interface PaginationProps {
  page?: number;
  totalPages?: number;
  setSelectedPage: (page: number) => void;
}

const PaginationItem: React.FC<PaginationProps> = ({ page, totalPages, setSelectedPage }) => {
  return [...Array(totalPages)].map((_, index) => (
    <Pagination.Item
      key={index + 1}
      active={index + 1 === page}
      onClick={() => setSelectedPage(index + 1)}
    >
      {index + 1}
    </Pagination.Item>
  ));
};

const BasicPagination: React.FC<PaginationProps> = ({ page, totalPages, setSelectedPage }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "1em" }}>
      <Pagination size="lg">
        <PaginationItem
          key={page}
          page={page}
          totalPages={totalPages}
          setSelectedPage={setSelectedPage}
        />
      </Pagination>
    </div>
  );
};

export default BasicPagination;
