import { CSSProperties } from "react";
import { mainContentStyle } from "../styles";

function Dashboard() {
  const dashboardStyle: CSSProperties = {
    ...mainContentStyle,
  };
  return (
    <div style={dashboardStyle}>
      <h6 style={{ fontWeight: "bold" }}>Dashboard</h6>
    </div>
  );
}

export default Dashboard;
