/**
 * Created by jmichelin on 12/28/16.
 */
import React from 'react'
import { Panel, Accordion, Button } from 'react-bootstrap'
//import { Router } from 'react-router'
import InterviewQuestionList from './InterviewQuestions/List'
import InterviewQuestionCreate from './InterviewQuestions/Create'
import InterviewQuestionUpdate from './InterviewQuestions/Update'

class Interview extends React.Component {
  constructor() {
    super()
    this.state = {
      interviewQuestionList: [],
      open: false
    }
  }

  render() {
    console.log('+++InterviewList.js --> this.props => ', this.props)
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Button bsStyle="primary" onClick={ ()=> this.setState({ open: !this.state.open })}>
              Interview Question Form
            </Button>
            <Panel collapsible expanded={this.state.open}>
              <InterviewQuestionCreate/>
            </Panel>
            <InterviewQuestionUpdate interviewQuestionData={this.props.interviewQuestionData}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            Filter on {this.props.params.status} questions
            <InterviewQuestionList status={this.props.params.status}
                                   interviewQuestionList={this.state.interviewQuestionList}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Interview