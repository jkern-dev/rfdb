import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions';
import { 
  fetchQuestionAnswers,
  fetchUserQuestionAnswer,
  createAnswer
} from '../../actions/answer_actions';
import Questions from './questions';

const mapStateToProps = (state) => {
  return {
    questions: Object.values(state.questions.all)
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchQuestionAnswers: (id) => dispatch(fetchQuestionAnswers(id)),
    createAnswer: (data) => dispatch(createAnswer(data)),
    fetchUserQuestionAnswer: (questionId, userId) => dispatch(fetchUserQuestionAnswer(questionId, userId))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Questions);