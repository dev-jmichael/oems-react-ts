import axios from 'axios';

export const getQuestionBanks = async (selectedPage: number) => {
  const response = await axios.get(`http://localhost:8080/api/v1/question-banks?page=${selectedPage}`);
  return response;
};
