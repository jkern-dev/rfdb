import React from 'react';

class QuestionBox extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.question.body}</h3>
      </div>
    );
  }
}

export default QuestionBox;