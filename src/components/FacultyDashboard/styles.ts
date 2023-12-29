import { CSSProperties } from "react";

const boxShadowStyle: CSSProperties = {
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
}

const commonStyle: CSSProperties = {
    borderRadius: '26px',
    ...boxShadowStyle
};

const mainContentStyle: CSSProperties = {
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column',
    gap: '1em',
    padding: '20px'
}

export {
    boxShadowStyle,
    commonStyle,
    mainContentStyle
}