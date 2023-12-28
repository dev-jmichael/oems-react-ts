import { CSSProperties, useCallback, useEffect, useState } from "react";
import { panelStyle } from "../styles";
import { Col, Container } from "react-bootstrap";
import QuestionBankCard from "./QuestionBankCard";
import QuestionBankGrid from "./QuestionBankGrid";
import { QuestionBank } from "@type/QuestionBank";
import QuestionBankActions from "./QuestionBankActions";
import BasicPagination from "../UI/BasicPagination";
import { PaginationDetails } from "@type/PaginationDetails";
import { createQuestionBank, getQuestionBanks } from "@services/questionBankService";

function QuestionBanks() {
  const [questionBanks, setQuestionBanks] = useState<QuestionBank[]>([])
  const [paginationDetails, setPaginationDetails] = useState<PaginationDetails>({});
  const [selectedPage, setSelectedPage] = useState<number>(1)
  const [createMode, setCreateMode] = useState<boolean>(false)

  const questionBanksStyle: CSSProperties = {
    ...panelStyle,
  };

  const fetchQuestionBanks = useCallback(async () => {
    try {
      const response = await getQuestionBanks(selectedPage);
      const { data, pagination } = response.data.payload;
      setQuestionBanks(data);
      setPaginationDetails(pagination);
    } catch (error) {
      console.log(error);
    }
  }, [selectedPage]);

  const submitTitle = async (title: string) => {
    try {
      const response = await createQuestionBank(title);
      fetchQuestionBanks();
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchQuestionBanks();
  }, [fetchQuestionBanks])
  
  return (
    <Container fluid style={questionBanksStyle}>

      <h5 style={{ fontWeight: 'bold', color: 'white' }}>Question Banks</h5>
    
      <QuestionBankActions 
        createMode={createMode} 
        setCreateMode={setCreateMode}
        submitTitle={submitTitle}
      />
    
      <QuestionBankGrid>
        {questionBanks.map((questionBank, index) => (
          <Col key={index} md={4} className="mb-4">
            <QuestionBankCard key={questionBank.questionBankId} data={questionBank} />
          </Col>
        ))}
      </QuestionBankGrid>
    
      <BasicPagination 
        page={paginationDetails.page} 
        totalPages={paginationDetails.totalPages} 
        setSelectedPage={setSelectedPage}
      />

    </Container>
  )
}

export default QuestionBanks