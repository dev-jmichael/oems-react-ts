import BasicPagination from "@components/FacultyDashboard/UI/BasicPagination";
import Header from "@components/FacultyDashboard/UI/Header";
import Sidebar from "@components/FacultyDashboard/UI/Sidebar/Sidebar";
import { PaginationContext } from "../context/PaginationContext";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function FacultyDashboard() {
  const { paginationDetails, setSelectedPage } = useContext(PaginationContext);

  return (
    <Container
      fluid
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 5fr",
        gridTemplateRows: "auto",
        gap: "1em",
        height: "100vh",
        background:
          "linear-gradient(to bottom, #6590E5 0%,  #7DD1DA 50%, #F3F4F6 50%, #F3F4F6 100%)",
        padding: "20px",
      }}
    >
      <div>
        <Sidebar />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          height: "100%",
        }}
      >
        <Header />
        <Outlet />
        <BasicPagination
          page={paginationDetails.page}
          totalPages={paginationDetails.totalPages}
          setSelectedPage={setSelectedPage}
        />
      </div>
    </Container>
  );
}

export default FacultyDashboard;
