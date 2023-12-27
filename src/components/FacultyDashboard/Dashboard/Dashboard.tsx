import { CSSProperties } from "react";
import { panelStyle } from "../styles";

function Dashboard() {
  const dashboardStyle: CSSProperties = {
    ...panelStyle,
  };
  return (
    <div style={dashboardStyle}>
      <h6 style={{ fontWeight: 'bold' }}>Dashboard</h6>
    </div>
  )
}

export default Dashboard