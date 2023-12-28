import { Card, Button } from "react-bootstrap";
import { QuestionBank } from "../../../types/QuestionBank";
import { getAcronym } from "../../../utils/StringUtil";

interface QuestionBankCardProps {
  data: QuestionBank;
}

const QuestionBankCard: React.FC<QuestionBankCardProps> = ({ data }) => {
  return (
    <Card>
      <Card.Header>{data.questionBankId}</Card.Header>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{getAcronym(data.title)}</Card.Text>
        <Button>Open</Button>
      </Card.Body>
    </Card>
  );
};

export default QuestionBankCard;
