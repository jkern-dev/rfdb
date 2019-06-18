import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/question_actions';
import { fetchQuestionAnswers } from '../../actions/answer_actions';
import Results from './results';

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.questions.question,
    qID: ownProps.match.params.qId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
    fetchQuestionAnswers: (id) => dispatch(fetchQuestionAnswers(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Results);