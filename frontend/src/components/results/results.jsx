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

  filterRatings() {
    let ratings = {};
    ratings["1"] = this.state.answers.filter((answer) => answer.answer === 1);
    ratings["2"] = this.state.answers.filter((answer) => answer.answer === 2);
    ratings["3"] = this.state.answers.filter((answer) => answer.answer === 3);
    ratings["4"] = this.state.answers.filter((answer) => answer.answer === 4);
    ratings["5"] = this.state.answers.filter((answer) => answer.answer === 5);
    ratings["6"] = this.state.answers.filter((answer) => answer.answer === 6);
    ratings["7"] = this.state.answers.filter((answer) => answer.answer === 7)
    ratings["8"] = this.state.answers.filter((answer) => answer.answer === 8);
    ratings["9"] = this.state.answers.filter((answer) => answer.answer === 9);
    ratings["10"] = this.state.answers.filter((answer) => answer.answer === 10);
    return ratings;
  }

  render() {
    if (this.state.question === undefined) return null;
    if (this.state.answers.length === 0) return null;
    let ratings = this.filterRatings();
    console.log(ratings);
    const ratingData = {
      labels: ['1', '2','3','4','5','6','7','8','9','10'],
      datasets: [{
        data: [
          ratings["1"].length,
          ratings["2"].length,
          ratings["3"].length,
          ratings["4"].length,
          ratings["5"].length,
          ratings["6"].length,
          ratings["7"].length,
          ratings["8"].length,
          ratings["9"].length,
          ratings["10"].length,
        ]
      }]
    };
    console.log(ratingData);
    return (
      <>
        <h1>{this.state.question.body}</h1>
      </>
    );
  }
}

export default Results;