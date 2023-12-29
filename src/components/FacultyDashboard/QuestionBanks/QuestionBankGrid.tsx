import React, { CSSProperties } from "react";
import { Container } from "react-bootstrap";

interface QuestionBankGridProps {
  children: React.ReactNode;
}

const QuestionBankGrid: React.FC<QuestionBankGridProps> = ({ children }) => {
  const gridStyle: CSSProperties = {
    display: "grid",
    gap: "1em",
    gridTemplateColumns: "repeat(3, 1fr)",
  };

  return (
    <Container fluid style={gridStyle}>
      {children}
    </Container>
  );
};

export default QuestionBankGrid;
