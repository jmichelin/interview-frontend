/**
 * Created by jmichelin on 12/28/16.
 */
import React from 'react'
//import { Router } from 'react-router'
import InterviewQuestionList from './InterviewQuestions/List'
import InterviewQuestionCreate from './InterviewQuestions/Create'
import InterviewQuestionUpdate from './InterviewQuestions/Update'

class Interview extends React.Component {
  constructor () {
    super()
    this.state = {
      interviewQuestionList: []
    }
  }

  render() {
    console.log('this.props => ', this.props)
    return (
      <div className="row">
        <div className="col-md-8">
          Interview Question List (es6) --> {this.props.params.status}
          <InterviewQuestionList status={this.props.params.status} interviewQuestionList={this.state.interviewQuestionList} />
        </div>
        <div className="col-md-4">
          Interview Question Form
          <InterviewQuestionCreate/>
          <InterviewQuestionUpdate interviewQuestionData={this.props.interviewQuestionData}/>
        </div>
      </div>
    )
  }
}

export default Interview

// var Interview = React.createClass({
//   getInitialState: function() {
//     return {
//       interviewQuestionList: [1,2,3]
//     }
//   },
//   render: function() {
//     console.log(this.props)
//     return (
//     <div className="row">
//       <div className="col-md-8">
//         Interview Question List --> {this.props.params.status}
//         <InterviewQuestionList status={this.props.params.status} interviewQuestionList={this.state.interviewQuestionList} />
//       </div>
//       <div className="col-md-4">
//         Interview Question Form
//         <InterviewQuestionCreate/>
//         <InterviewQuestionUpdate interviewQuestionData={this.props.interviewQuestionData}/>
//       </div>
//     </div>
//     )
//   }
// });

// module.exports = Interview;