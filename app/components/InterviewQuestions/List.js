/**
 * Created by jmichelin on 12/28/16.
 * TODO Fetch and display questions
 */
import React from 'react';

class InterviewQuestionList extends React.Component {
  constructor () {
    super()
    this.state = {
      interviewQuestionList: [],
      items: []
    }
  }

  componentWillMount () {
    let fetchUrl = 'https://infinite-waters-52055.herokuapp.com/interview/questions/list'
    fetch(fetchUrl)
      .then(
        (response) => {
          return response.json()
        }
      )
      .then(
        (
          interviewQuestionList: []) => {
          console.log('+++interviewQuestions/List.js ---> interviewQuestionList => ', interviewQuestionList);
          return this.setState({interviewQuestionList})
        }
      )
  }

  filter (e) {
    this.setState({filter: e.target.value})
  }
  render () {
    let interviewQuestionList = this.state.interviewQuestionList
    if(this.state.filter) {
      interviewQuestionList = interviewQuestionList.filter(interviewQuestion =>
        interviewQuestion.genre.toLowerCase()
          .includes(this.state.filter.toLowerCase()))
    }
    return (
      <div>
        <input style={{marginBottom: 10}} type="text" onChange={this.filter.bind(this)}/>
        {interviewQuestionList.map(interviewQuestion => <InterviewQuestion key={interviewQuestion._id} interview={interviewQuestion} />)}
      </div>
    )
  }
}

const InterviewQuestion = (props) => {
  return (
  <div className="panel panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title">({props.interview.genre}) {props.interview.title} - Time to Answer {props.interview.timeToAnswer} mins</h3>
    </div>
    <div className="panel-body">
      <p>{props.interview.questionText}</p>
      <p>{props.interview.answerText}</p>
    </div>
  </div>
  )
}



export default InterviewQuestionList
