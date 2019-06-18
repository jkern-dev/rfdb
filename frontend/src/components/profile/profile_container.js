import { connect } from 'react-redux';
import { fetchUserQuestions } from '../../actions/question_actions';
import { fetchQuestionAnswers } from '../../actions/answer_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    questions: Object.values(state.questions.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserQuestions: id => dispatch(fetchUserQuestions(id)),
    fetchQuestionAnswers: (id) => dispatch(fetchQuestionAnswers(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Profile);