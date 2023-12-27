import React from "react";
import { Container, Row } from "react-bootstrap";

interface QuestionBankGridProps {
    children: React.ReactNode;
}

const QuestionBankGrid: React.FC<QuestionBankGridProps> = ({ children }) => {
    return (
      <Container fluid>
        <Row>
          {children}
        </Row>
      </Container>
    );
}

export default QuestionBankGrid;