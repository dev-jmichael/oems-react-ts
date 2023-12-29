import { CSSProperties } from "react";
import { commonStyle } from "../styles";

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

export {
    sidebarStyle,
    defaultLinkStyle,
    activeLinkStyle
}