import axios from 'axios';

export const writeAnswer = data => {
  return axios.post('/api/answers/', data)
};

export const getAnswers = () => {
  return axios.get('/api/answers')
};

export const getQuestionAnswers = (id) => {
  return axios.get(`/api/answers/questions/${id}`)
};

export const getUserQuestionAnswer = (questionId, userId) => {
  return axios.get(`/api/answers/questions/${questionId}/${userId}`)
};