import { Image, NavDropdown } from "react-bootstrap";
import { profileDropdownStyle } from "./styles";
import placeholder from "@assets/placeholder.png";
import "./hide-dropdown-arrow.css";

function ProfileImage() {
  return <Image style={{ objectFit: "cover", width: "2.5rem" }} src={placeholder} roundedCircle />;
}

function ProfileDropdown() {
  return (
    <NavDropdown
      title={<ProfileImage />}
      id="basic-nav-dropdown"
      style={profileDropdownStyle}
      className="hide-dropdown-arrow"
    >
      <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
    </NavDropdown>
  );
}

export default ProfileDropdown;
