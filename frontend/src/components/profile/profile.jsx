import React from 'react';
import QuestionBox from '../questions/question_box';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }

  componentWillMount() {
    this.props.fetchUserQuestions(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
    this.setState({questions: newState.questions});
  }

  render() {
    if (this.state.questions.length === 0) {
      return (<div>This user has no Questions</div>)
    } else {
      return (
        <div>
          <h2>All Users Questions</h2>
          {this.state.questions.map(question => (
            <QuestionBox key={question._id}
              question={question}
              answerNum={5}
              fetchQuestionAnswers={this.props.fetchQuestionAnswers}
            />
          ))}
        </div>
      );
    }
  }
}

export default Profile;