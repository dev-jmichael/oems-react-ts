import { CSSProperties } from "react";
import { panelStyle } from "../styles";

function Reports() {
  const reportsStyle: CSSProperties = {
    ...panelStyle,
  };
  return (
    <div style={reportsStyle}>
      <h6 style={{ fontWeight: 'bold' }}>Reports</h6>
    </div>
  )
}

export default Reports