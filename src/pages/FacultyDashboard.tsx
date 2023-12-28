import Header from "@components/FacultyDashboard/UI/Header";
import Sidebar from "@components/FacultyDashboard/UI/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function FacultyDashboard() {
  return (
    <Container
      fluid
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        background:
          "linear-gradient(to bottom, #6590E5 0%,  #7DD1DA 50%, #F3F4F6 50%, #F3F4F6 100%)",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", gap: "1em" }}>
        <div style={{ height: "90vh" }}>
          <Sidebar />
        </div>
        <div style={{ width: "100%" }}>
          <Header />
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default FacultyDashboard;
