import ProfileDropdown from "./ProfileDropdown";
import { headerStyle } from "./styles";

function Header() {
  return (
    <header style={headerStyle}>
      <ProfileDropdown />
    </header>
  );
}

export default Header;
