import { CSSProperties } from "react";

const boxShadowStyle: CSSProperties = {
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
}

const commonStyle: CSSProperties = {
    position: 'relative',
    borderRadius: '26px',
    ...boxShadowStyle
};

const panelStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    padding: '20px',
    height: '100%',
}

export {
    boxShadowStyle,
    commonStyle,
    panelStyle
}