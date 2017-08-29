/**
 * Created by jmichelin on 12/28/16.
 */
import React from 'react';
// import {Panel} from 'react-bootstrap';
import _ from 'lodash';
import mockInterviewTemplateData from '../../interviewTemplateData.json';

//console.log(JSON.stringify(mockInterviewTemplateData.interviewTemplates, null, 4));

let mockInterviewTemplateArray = mockInterviewTemplateData.interviewTemplates;



class ListInterviewTemplates extends React.Component {

  render() {

    // let interviewQuestions = interviewQuestionList.map((interviewQuestion, index) => {
    //   let curKey = interviewQuestion._id || index;
    //   return <InterviewQuestion interview={interviewQuestion} key={curKey}
    //                             removeQuestion={this.handleRemoveQuestion.bind(this)}
    //                             updateQuestion={this.props.updateQuestion}
    //                             customValidateText={this.customValidateText.bind(this)}/>
    // });

    let interviewTemplates = mockInterviewTemplateArray.map((interviewTemplate)=>{
      console.log('interviewTemplate ', interviewTemplate)
      let curKey = interviewTemplate._id || _.uniqueId('interviewTemplate_');;
      return <InterviewTemplate key={curKey}
                                interviewTemplate={interviewTemplate}/>

    });

    return (
      <div>
        <h1>List Interview Template Here</h1>
        <div>
          Interview Nickname, Interview Description, Number of Questions, Estimated Interview Length
        </div>
        <div>
          {interviewTemplates}
        </div>
      </div>
    )
  }
}

/*
<div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title">Panel title</h3>
  </div>
  <div className="panel-body">
    Panel content
  </div>
</div>
 */
//TODO move to another file
const InterviewTemplate = (props) => {
  const ulOverrideStyle = {
    padding: '10px 10px 0px 10px',
  };
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title"> {props.interviewTemplate.interviewNickname}</h3>
      </div>
      <div className="panel-body" style={ulOverrideStyle}>
          <ul className="list-group no-bullets">
          <li className="list-group-item-info">Interview Description: {props.interviewTemplate.interviewDescription}</li>
          <li className="list-group-item-info">Number Of Questions: {props.interviewTemplate.numberOfQuestions}</li>
          <li className="list-group-item-info">Estimated Interview Length: {props.interviewTemplate.estimatedInterviewLength}</li>
        </ul>
      </div>
    </div>
  )
};

export default ListInterviewTemplates