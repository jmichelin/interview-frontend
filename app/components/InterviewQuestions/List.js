/**
 * Created by jmichelin on 12/28/16.
 */
var React = require('react');

var ListInterviewQuestions = React.createClass({
  render: function() {
    return (
      <div>
        <h4>Interview Question List Here {this.props.status}</h4>
        <p>{this.props.interviewQuestionList}</p>
      </div>
    )
  }
});

module.exports = ListInterviewQuestions;