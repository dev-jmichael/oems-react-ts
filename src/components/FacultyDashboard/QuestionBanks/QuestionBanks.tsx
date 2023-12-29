import { CSSProperties, useCallback, useContext, useEffect, useState } from "react";
import { mainContentStyle } from "../styles";
import { Container } from "react-bootstrap";
import QuestionBankCard from "./QuestionBankCard";
import QuestionBankGrid from "./QuestionBankGrid";
import { QuestionBank } from "@type/QuestionBank";
import QuestionBankActions from "./QuestionBankActions";
import { createQuestionBank, getQuestionBanks } from "@services/questionBankService";
import { PaginationContext } from "../../../context/PaginationContext";

function QuestionBanks() {
  const [questionBanks, setQuestionBanks] = useState<QuestionBank[]>([]);
  const { paginationDetails, setPaginationDetails } = useContext(PaginationContext);
  const [createMode, setCreateMode] = useState<boolean>(false);

  const questionBanksStyle: CSSProperties = {
    ...mainContentStyle,
  };

  const fetchQuestionBanks = useCallback(async () => {
    try {
      const response = await getQuestionBanks(paginationDetails.page);
      const { data, pagination } = response.data.payload;
      setQuestionBanks(data);
      setPaginationDetails(pagination);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationDetails.page]);

  const submitTitle = async (title: string) => {
    try {
      const response = await createQuestionBank(title);
      fetchQuestionBanks();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuestionBanks();
  }, [fetchQuestionBanks]);

  return (
    <Container fluid style={questionBanksStyle}>
      <h5 style={{ fontWeight: "bold", color: "white" }}>Question Banks</h5>

      <QuestionBankActions
        createMode={createMode}
        setCreateMode={setCreateMode}
        submitTitle={submitTitle}
      />

      <QuestionBankGrid>
        {questionBanks.map((questionBank) => (
          <QuestionBankCard key={questionBank.questionBankId} data={questionBank} />
        ))}
      </QuestionBankGrid>
    </Container>
  );
}

export default QuestionBanks;
