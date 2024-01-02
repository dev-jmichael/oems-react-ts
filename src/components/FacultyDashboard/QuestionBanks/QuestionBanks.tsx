import { useEffect, useState, useCallback } from "react";
import { Container } from "react-bootstrap";
import QuestionBankCard from "./QuestionBankCard";
import QuestionBankGrid from "./QuestionBankGrid";
import { QuestionBank } from "@type/QuestionBank";
import QuestionBankActions from "./QuestionBankActions";
import { createQuestionBank, getQuestionBanks } from "@services/questionBankService";
import { questionBanksStyle } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setPageData } from "../../../features/pagination/pageDataSlice";
import { setCurrentPage } from "../../../features/pagination/currentPageSlice";

function QuestionBanks() {
  const [questionBanks, setQuestionBanks] = useState<QuestionBank[]>([]);
  const currentPage = useSelector((state: RootState) => state.currentPage.value);
  const dispatch = useDispatch();
  const [createMode, setCreateMode] = useState<boolean>(false);

  const fetchQuestionBanks = useCallback(async () => {
    try {
      const response = await getQuestionBanks(currentPage);
      const { data, pagination } = response.data.payload;
      setQuestionBanks(data);
      dispatch(setPageData(pagination));
    } catch (error) {
      console.log(error);
    }
  }, [currentPage, dispatch]);

  const submitTitle = async (title: string) => {
    try {
      const response = await createQuestionBank(title);
      console.log(response.data);
      fetchQuestionBanks();
      dispatch(setCurrentPage(1));
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
