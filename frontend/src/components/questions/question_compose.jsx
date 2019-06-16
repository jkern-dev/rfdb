import React from 'react';
import QuestionBox from './question_box';

class QuestionCompose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      newQuestion: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({newQuestion: nextProps.newQuestion.body});
  }

  handleSubmit(e) {
    e.preventDefault();
    let question = {
      body: this.state.body
    };
    this.props.composeQuestion(question);
    this.setState({body: ''})
  }

  update() {
    return e => this.setState({
      body: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text"
              value={this.state.body}
              onChange={this.update()}
              placeholder="Write your RFDB!"
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
        <br/>
        {/* <QuestionBox question={this.state.newQuestion} /> */}
      </div>
    )
  }
}

export default QuestionCompose;