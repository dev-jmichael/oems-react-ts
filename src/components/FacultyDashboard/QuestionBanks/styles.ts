import { CSSProperties } from "react";
import { boxShadowStyle, mainContentStyle } from "../styles";

export const buttonStyle: CSSProperties = {
    backgroundColor: "white",
    borderRadius: "12px",
    color: "black",
    border: "none",
    padding: "5px 15px !important",
    ...boxShadowStyle,
};

export const actionsContainerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 0px",
};

export const gridStyle: CSSProperties = {
    display: "grid",
    gap: "1em",
    padding: '0',
    gridTemplateColumns: "repeat(3, 1fr)",
};

export const questionBanksStyle: CSSProperties = {
    ...mainContentStyle,
};
