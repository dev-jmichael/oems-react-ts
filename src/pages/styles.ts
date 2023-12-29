import { CSSProperties } from 'react';

export const facultyDashboardStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 5fr",
    gridTemplateRows: "auto",
    gap: "1em",
    height: "100vh",
    background:
      "linear-gradient(to bottom, #6590E5 0%,  #7DD1DA 50%, #F3F4F6 50%, #F3F4F6 100%)",
    padding: "20px",
}

export const mainContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    height: "100%",
}