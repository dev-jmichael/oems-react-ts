import BasicPagination from "@components/FacultyDashboard/UI/BasicPagination";
import Header from "@components/FacultyDashboard/UI/Header";
import Sidebar from "@components/FacultyDashboard/UI/Sidebar";
import { PaginationContext } from "../context/PaginationContext";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { facultyDashboardStyle, mainContainerStyle } from "./styles";

function FacultyDashboard() {
  const { paginationDetails, setSelectedPage } = useContext(PaginationContext);

  return (
    <Container fluid style={facultyDashboardStyle}>
      <div>
        <Sidebar />
      </div>
      <div style={mainContainerStyle}>
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
