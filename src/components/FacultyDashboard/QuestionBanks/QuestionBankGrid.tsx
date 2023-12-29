import React from "react";
import { Container } from "react-bootstrap";
import { gridStyle } from "./styles";

interface QuestionBankGridProps {
  children: React.ReactNode;
}

const QuestionBankGrid: React.FC<QuestionBankGridProps> = ({ children }) => {
  return (
    <Container fluid style={gridStyle}>
      {children}
    </Container>
  );
};

export default QuestionBankGrid;
