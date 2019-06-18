import React from 'react';

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
    return (
      <h1>This Works!</h1>
    );
  }
}

export default Results;