import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { RiFileList2Line } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";
import Logo from "@assets/logo.png";
import { sidebarStyle, defaultLinkStyle, activeLinkStyle } from "./sidebarStyles";

function Sidebar() {
  const parentRoute = "/faculty";
  const sidebarProps = [
    {
      linkTitle: "Dashboard",
      route: `${parentRoute}/dashboard`,
      icon: <MdDashboard />,
    },
    {
      linkTitle: "Question Banks",
      route: `${parentRoute}/question-banks`,
      icon: <BsBoxSeam />,
    },
    {
      linkTitle: "Exams",
      route: `${parentRoute}/exams`,
      icon: <RiFileList2Line />,
    },
    {
      linkTitle: "Reports",
      route: `${parentRoute}/reports`,
      icon: <HiOutlineDocumentReport />,
    },
  ];

  return (
    <Container style={sidebarStyle}>
      <div style={{ textAlign: "center", marginBottom: "4em", marginTop: "4em" }}>
        <img src={Logo} alt="Logo" width={80} />
      </div>

      <Nav className="flex-column">
        {sidebarProps.map((props, index) => (
          <NavLink
            key={index}
            to={props.route}
            style={({ isActive }) => (isActive ? activeLinkStyle : defaultLinkStyle)}
          >
            <span>{props.icon}</span>
            {props.linkTitle}
          </NavLink>
        ))}
      </Nav>
    </Container>
  );
}

export default Sidebar;
