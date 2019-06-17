import React from 'react';


class QuestionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question,
      answerNum: this.props.answerNum
    }
  }

  update() {
    return e => this.setState({
      answerNum: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className = "question-box">
        <h3>{this.state.question.body}</h3>
        <div className = "answer-options">
          <p>{'Your Rating: '+ this.state.answerNum}</p>
          <div className = "slide-container">
            <input 
              type="range" 
              min="1" max="10" 
              value={this.state.answerNum}
              onChange={this.update()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionBox;