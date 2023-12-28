import axios from 'axios';

export const getQuestionBanks = async (selectedPage: number) => {
  const response = await axios.get(`http://localhost:8080/api/v1/question-banks?page=${selectedPage}`);
  return response;
};

export const createQuestionBank = async (title: string) => {
  const response = await axios.post(`http://localhost:8080/api/v1/question-banks`, { title: title, createdBy: 'CDAC82A3-EB25-4F0A-9DD3-AA1B2847DCF3' });
  return response;
}
