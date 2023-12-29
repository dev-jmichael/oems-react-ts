import { CSSProperties } from "react";
import { mainContentStyle } from "../styles";

function Exams() {
  const examsStyle: CSSProperties = {
    ...mainContentStyle,
  };
  return (
    <div style={examsStyle}>
      <h6 style={{ fontWeight: "bold" }}>Exams</h6>
    </div>
  );
}

export default Exams;
