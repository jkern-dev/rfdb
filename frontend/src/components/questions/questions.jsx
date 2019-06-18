import React from 'react';
import { withRouter } from 'react-router-dom';
import QuestionBox from './question_box';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }

  componentWillMount() {
    this.props.fetchQuestions();
  }

  componentWillReceiveProps(newState) {
    this.setState({ questions: newState.questions });
  }

  render () {
    if (this.state.questions.length === 0) {
      return (<div>There are no Questions</div>)
    } else {
      return (
        <div>
          <h2>All Questions</h2>
          {this.state.questions.map(question => (
            <QuestionBox key={question._id} 
              question={question} 
              answerNum={5}
              fetchQuestionAnswers={this.props.fetchQuestionAnswers}
              createAnswer={this.props.createAnswer}
              fetchUserQuestionAnswer={this.props.fetchUserQuestionAnswer}
              history={this.props.history}
            />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Question);