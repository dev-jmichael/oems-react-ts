import { CSSProperties } from "react";
import { commonStyle } from "../styles";

//Sidebar styles
const sidebarStyle: CSSProperties = {
    ...commonStyle,
    padding: '20px',
    height: '100%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white'
};

const defaultLinkStyle: CSSProperties = {
    color: '#333',
    padding: '15px 10px',
    margin: '5px 0',
    display: 'flex',
    gap: '1em',
    alignItems: 'center',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'all 150ms ease-in-out'
  };

const activeLinkStyle: CSSProperties = {
    ...defaultLinkStyle,
    background: 'linear-gradient(to right, #6590E5, #7DD1DA)',
    color: 'white',
}

//Header styles
const headerStyle: CSSProperties = {
    ...commonStyle,
    display: "flex",
    justifyContent: "end",
    padding: "15px 25px",
    backgroundColor: "white",
};

const profileDropdownStyle: CSSProperties = {
    padding: "3px",
    background: 'linear-gradient(to right, #6590E5, #7DD1DA)',
    borderRadius: "9999px",
}

export {
    sidebarStyle,
    defaultLinkStyle,
    activeLinkStyle,
    headerStyle,
    profileDropdownStyle
}