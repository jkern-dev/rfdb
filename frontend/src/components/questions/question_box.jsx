import React from 'react';



class QuestionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question,
      answerNum: this.props.answerNum,
      answers: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestionAnswers(this.props.question._id)
      .then(({answers}) => {
        this.setState({
          answers: answers.data
        })
      });
  }

  update() {
    return e => this.setState({
      answerNum: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let answer = {
      question: this.state.question._id,
      answer: this.state.answerNum
    }
    this.props.createAnswer(answer)
      .then(() => this.props.history.push(`/questions/results/${this.state.question._id}`));
  }

  render() {
    return (
      <div className = "question-box">
        <h3>{this.state.question.body}</h3>
        <div className = "answer-option s">
          <p>{'Your Rating: '+ this.state.answerNum}</p> 
          <div className = "slide-container">
            <input 
              type="range" 
              min="1" max="10" 
              value={this.state.answerNum}
              onChange={this.update()}
            />
          </div>
          <button onClick={this.handleSubmit}>Vote!</button>
        </div>
      </div>
    );
  }
}

export default QuestionBox;