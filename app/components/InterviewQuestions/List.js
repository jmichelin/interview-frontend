/**
 * Created by jmichelin on 12/28/16.
 * TODO Fetch and display questions
 */
import React from 'react';
import { Accordion, Panel } from 'react-bootstrap'

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
        (interviewQuestionList: []) => {
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
  console.log('props', props);
  let header = props.interview.title + ' ' + props.interview.genre + ' ' + props.interview.timeToAnswer + ' mins to answer';
  return (
  <div className="panel panel-primary">
    <Accordion>
      <Panel header={header} bsStyle="primary" eventKey={props.interview._id}>
        <Panel header="Question" bsStyle="danger">
          <p>{props.interview.questionText}</p>
        </Panel>
        <Panel header="Answer" bsStyle="success">
          <p>{props.interview.answerText}</p>
        </Panel>
      </Panel>
    </Accordion>
  </div>
  )
}



export default InterviewQuestionList
