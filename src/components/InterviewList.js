/**
 * Created by jmichelin on 12/28/16.
 */
import React from 'react'
import { Panel, Button } from 'react-bootstrap'
import InterviewQuestionList from './InterviewQuestions/List'
import InterviewQuestionCreate from './InterviewQuestions/Create'
import InterviewQuestionUpdate from './InterviewQuestions/Update'

class Interview extends React.Component {
  constructor() {
    super();
    this.state = {
      newInterviewQuestion: {
      "genre": '',
      "title": '',
      "timeToAnswer": 1,
      "questionText": '',
      "answerText": '',
      "status": ''
    },
      interviewQuestionList: [1,2,3],
      open: false
    }
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
  }

  componentDidMount() {
    //get interview questions here
    //console.log('InterviewList.js => Did Mount');
    let fetchUrl = 'https://infinite-waters-52055.herokuapp.com/interview/questions/list'
    fetch(fetchUrl)
      .then(
        (response) => {
          return response.json()
        }
      )
      .then(
        (interviewQuestionList: []) => {
          //console.log('+++interviewQuestions/List.js ---> interviewQuestionList => ', interviewQuestionList);
          return this.setState({interviewQuestionList})
        }
      )
  }

  componentWillUnmount() {
    //remove question list when unmounted
  }


/*
  componentWillMount() {
    console.log('InterviewList.js => Will Mount')
  }

  componentWillReceiveProps() {
    console.log('InterviewList.js => Will Receive Props');
  }

  shouldComponentUpdate() {
    console.log('InterviewList.js => Should Component Update');
    return true;
  }

  componentWillUpdate() {
    console.log('InterviewList.js => Will Update');
  }

  componentDidUpdate() {
    console.log('InterviewList.js => Did Update');
  }
  */

  handleAddQuestion(question) {
    event.preventDefault();
    let data = question;
    console.log('+++ handleAddQuestion data => ', data);
    fetch('https://infinite-waters-52055.herokuapp.com/interview/question/add', {
      method: 'post',
      headers: {
        "Content-Type": "application/json; charset=UTF-8;"
      },
      mode: 'no-cors',
      body: JSON.stringify(data)
    })
      .then((response) => {
        console.log('response.status ', response.status);
        if(response.ok){
          response.json().then((interviewQuestion)=>{
            console.log('interviewQuestion=>  ', interviewQuestion);
          })
        } else {
          console.log('response not okay: ', response);
          //this.state.push
        }
        console.log('this.state', this.state);
        console.log('this.props', this.props);
        //this.setState(data);
      })
      .catch((e) => console.log('There has been a problem with your fetch operation: ' + e.message));
    this.setState(previousState => ({
      interviewQuestionList: [...previousState.interviewQuestionList, data]
    }));
  }




  render() {
    // like the profile page in the tutorial
    //console.log('+++InterviewList.js --> this.props => ', this.props)
    return (

      <div>
        <div className="row">
          <div className="col-md-12">
            <Button bsStyle="primary" onClick={ ()=> this.setState({ open: !this.state.open })}>
              Interview Question Form
            </Button>
            <Panel className="App-main" collapsible expanded={this.state.open}>
              <InterviewQuestionCreate
                addQuestion={this.handleAddQuestion}/>
            </Panel>
            <InterviewQuestionUpdate
              interviewQuestionData={this.props.interviewQuestionData}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">Viewing <em>{this.props.params.status}</em> interview questions.
            <InterviewQuestionList
              status={this.props.params.status}
              interviewQuestionList={this.state.interviewQuestionList}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Interview

