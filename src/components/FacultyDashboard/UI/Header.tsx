import { CSSProperties } from "react";
import { commonStyle } from "../styles";

function Header() {
  const headerStyle: CSSProperties = {
    ...commonStyle,
    padding: "20px",
    height: "8vh",
    backgroundColor: "white",
  };

  return <div style={headerStyle}></div>;
}

export default Header;
