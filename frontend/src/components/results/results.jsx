import React from 'react';
import { Bar } from 'react-chartjs';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question,
      answers: []
    }
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.qid)
      .then(({question}) => {
        this.setState({
          question: question.data
        })
      });
    this.props.fetchQuestionAnswers(this.props.match.params.qid)
      .then(({answers}) => {
        this.setState({
          answers: answers.data
        })
      });
  }

  render() {

    if (this.state.question === undefined) return null;
    if (this.state.answers.length === 0) return null;
    return (
      <h1>{this.state.question.body}</h1>
    );
  }
}

export default Results;