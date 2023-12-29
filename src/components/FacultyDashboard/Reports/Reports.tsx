import { CSSProperties } from "react";
import { mainContentStyle } from "../styles";

function Reports() {
  const reportsStyle: CSSProperties = {
    ...mainContentStyle,
  };
  return (
    <div style={reportsStyle}>
      <h6 style={{ fontWeight: "bold" }}>Reports</h6>
    </div>
  );
}

export default Reports;
