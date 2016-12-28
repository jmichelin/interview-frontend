/**
 * Created by jmichelin on 12/28/16.
 */
var React = require('react');
var Router = require('react-router');
var InterviewQuestionList = require('./InterviewQuestions/List');
var InterviewQuestionCreate = require('./InterviewQuestions/Create');
var InterviewQuestionUpdate = require('./InterviewQuestions/Update');

var Interview = React.createClass({
  getInitialState: function() {
    return {
      interviewQuestionList: [1,2,3]
    }
  },
  render: function() {
    console.log(this.props)
    return (
    <div className="row">
      <div className="col-md-8">
        Interview Question List --> {this.props.params.status}
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
});

module.exports = Interview;