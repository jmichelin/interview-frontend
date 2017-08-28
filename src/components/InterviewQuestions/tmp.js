/**
 * Created by jmichelin on 7/7/17.
 */
/**
 * Created by jmichelin on 12/28/16.
 * TODO form to add interview questions
 */
import React from 'react';

class InterviewQuestionCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "genre": '',
      "title": '',
      "timeToAnswer": 1,
      "questionText": '',
      "answerText": '',
      "status": ''
    };
    this.handleChange = this.handleChange.bind(this); //controls context of handleChange
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillMount() {
  //   console.log('InterviewQuestions/Create.js => Will Mount')
  // }
  //
  // componentDidMount() {
  //   console.log('InterviewQuestions/Create.js => Did Mount');
  // }
  //
  // componentWillReceiveProps() {
  //   console.log('InterviewQuestions/Create.js => Will Receive Props');
  // }
  //
  // shouldComponentUpdate() {
  //   console.log('InterviewQuestions/Create.js => Should Component Update');
  //   return true;
  // }
  //
  // componentWillUpdate() {
  //   console.log('InterviewQuestions/Create.js => Will Update');
  // }
  //
  // componentDidUpdate() {
  //   console.log('InterviewQuestions/Create.js => Did Update');
  // }

  handleChange(event) {
    //console.log('InterviewQuestions/Create.js ---> event.target.name => ', event.target.name);
    let keyName = event.target.name;
    let newState = {};
    newState[keyName] = event.target.value;
    //console.log('InterviewQuestions/Create.js ---> newState => ', newState);
    //this.setState({keyName: event.target.value});
    this.setState(newState);
    //console.log('this.state=> ', this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = {
      genre: this.state.genre,
      title: this.state.title,
      timeToAnswer: this.state.timeToAnswer,
      questionText: this.state.questionText,
      answerText: this.state.answerText,
      status: "active"
    };
    //console.log('+++ handleSubmit data => ', data);
    //console.log('addQuestion', this.props.addQuestion);
    this.props.addQuestion(data);
  }

  render() {
    return (
      <div>Hello</div>
    )
  }
}

InterviewQuestionCreate.propTypes = {
  addQuestion: React.PropTypes.func.isRequired,
};

export default InterviewQuestionCreate