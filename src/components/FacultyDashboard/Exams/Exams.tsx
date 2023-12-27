import { CSSProperties } from "react";
import { panelStyle } from "../styles";

function Exams() {
  const examsStyle: CSSProperties = {
    ...panelStyle,
  };
  return (
    <div style={examsStyle}>
      <h6 style={{ fontWeight: 'bold' }}>Exams</h6>
    </div>
  )
}

export default Exams