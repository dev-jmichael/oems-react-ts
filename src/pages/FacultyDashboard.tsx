import Pagination from "@components/FacultyDashboard/UI/Pagination";
import Header from "@components/FacultyDashboard/UI/Header";
import Sidebar from "@components/FacultyDashboard/UI/Sidebar";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { facultyDashboardStyle, mainContainerStyle } from "./styles";

function FacultyDashboard() {
  return (
    <Container fluid style={facultyDashboardStyle}>
      <aside>
        <Sidebar />
      </aside>
      <main style={mainContainerStyle}>
        <Header />
        <Outlet />
        <Pagination />
      </main>
    </Container>
  );
}

export default FacultyDashboard;
