/**
 * Created by jmichelin on 12/28/16.
 */
import React from 'react'
import {Panel, Button} from 'react-bootstrap'
import InterviewQuestionList from './InterviewQuestions/List'
import InterviewQuestionCreate from './InterviewQuestions/Create'
import InterviewQuestionUpdate from './InterviewQuestions/Update'
import axios from 'axios'
import Loader from 'react-loader'

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
      interviewQuestionList: [
        {
          "genre": 'Please Wait While Loading',
          "title": '',
          "timeToAnswer": 1,
          "questionText": '',
          "answerText": '',
          "status": ''
        }
      ],
      open: false,
      questionsLoaded: false
    };
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleRemoveQuestion = this.handleRemoveQuestion.bind(this);
    this.handleUpdateQuestion = this.handleUpdateQuestion.bind(this);
  }

  componentDidMount() {
    //console.log('InterviewList.js => Did Mount');
    let status = this.props.params.status || 'active';
    //let fetchUrl = 'https://infinite-waters-52055.herokuapp.com/interview/questions/list/'+status;
    let fetchUrl = 'http://127.0.0.1:7337/interview/questions/list/'+status;
    axios.get(fetchUrl)
      .then((returnedInterviewQuestionList: []) => {
          return this.setState({
            questionsLoaded: true,
            interviewQuestionList: returnedInterviewQuestionList.data
          })
        }
      );

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
    //console.log('handleAddQuestion this.state.interviewQuestionList -> ', this.state.interviewQuestionList);
    event.preventDefault();
    //let postUrl = 'https://infinite-waters-52055.herokuapp.com/interview/question/add';
    let postUrl = 'http://localhost:7337/interview/question/add';
    let data = question;
    //console.log('interviewList -> handleAddQuestion -> data => ', data);
    axios({
      method: 'post',
      url: postUrl,
      data: {
        "genre": data.genre,
        "title": data.title,
        "timeToAnswer": data.timeToAnswer,
        "questionText": data.questionText,
        "answerText": data.answerText,
        "status": "active"
      }
    })
      .then((response) => {
        //console.log('handleAddQuestion axios.then this.state.interviewQuestionList -> ', this.state.interviewQuestionList);
        //console.log('interviewList - response.data => ', response.data);
        data._id = response.data.id;
        this.setState(previousState => {
          return {
            interviewQuestionList: [...previousState.interviewQuestionList, data]
          }});
      })
      .catch((error) => {
        console.error('interviewList - error => ', error);
      });
    //console.log('this.state.interviewQuestionList -> ', this.state.interviewQuestionList);
    //console.log('+++ handleAddQuestion data => ', data);
  }

  handleRemoveQuestion (questionID) {
    event.preventDefault();
    console.log('value of question in InterviewList.js => ', questionID);
    let question = {
      "id": questionID,
      "status": "inactive"
    };
    console.log('question => ', question);
    //TODO remove question axios call
    let postUrl = 'https://infinite-waters-52055.herokuapp.com/interview/question/update';
    //let postUrl = 'http://localhost:7337/interview/question/update';
    axios({
      method: 'post',
      url: postUrl,
      data: question
    })
      .then((response) => {
        //console.log('handleAddQuestion axios.then this.state.interviewQuestionList -> ', this.state.interviewQuestionList);
        //console.log('line 133: interviewList->handleRemoveQuestion -> response.data => ', response.data);
        //console.log('this.state.interviewQuestionList=> ', this.state.interviewQuestionList);
        let removedInterviewQuestionIndex = this.state.interviewQuestionList.findIndex(function(element){
          //console.log(element._id,' = ', questionID);
          return element._id === questionID;
        });
        this.state.interviewQuestionList.splice(removedInterviewQuestionIndex, 1);
        let newInterviewQuestionList = this.state.interviewQuestionList;
        //console.log('newInterviewQuestionList => ', newInterviewQuestionList);
        //console.log('this.state.interviewQuestionList=> ', this.state.interviewQuestionList);
        //TODO remove from state
        this.setState({
          interviewQuestionList: newInterviewQuestionList
          });
      })
      .catch((error) => {
        console.error('interviewList - error => ', error);
      });
  }

  handleUpdateQuestion(questionToUpdate) {
    event.preventDefault();
    console.log('interviewList questionToUpdate=> ', questionToUpdate);
    //TODO axios update goes here.
    let postUrl = 'https://infinite-waters-52055.herokuapp.com/interview/question/update';
    //let postUrl = 'http://localhost:7337/interview/question/update';
    axios({
      method: 'post',
      url: postUrl,
      data: questionToUpdate
    })
      .then((response) => {
        //todo find interview question in state array
        let updatedInterviewQuestionIndex = this.state.interviewQuestionList.findIndex(function(element){
          //console.log(element._id,' = ', questionID);
          return element._id === questionToUpdate.id;
        });
        console.log('updatedInterviewQuestionIndex=> ', updatedInterviewQuestionIndex);
        console.log('thisstate.interviewQuestionList[updatedInterviewQuestionIndex]', this.state.interviewQuestionList[updatedInterviewQuestionIndex]);
        //todo update value in state array object
      })
      .catch((error) => {
        console.error('interviewList - error => ', error);
      });
  }

  render() {
    // like the profile page in the tutorial
    //console.log('+++InterviewList.js --> this.props => ', this.props)
    let options = {
      lines: 17,
      length: 56,
      width: 10,
      radius: 0,
      scale: 1.00,
      corners: 0,
      color: '#000',
      opacity: 0.25,
      rotate: 0,
      direction: 1,
      speed: .5,
      trail: 100,
      fps: 20,
      zIndex: 2e9,
      top: '50%',
      left: '50%',
      shadow: true,
      hwaccel: false,
      position: 'absolute'
    };
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Button bsStyle="primary" onClick={ () => this.setState({open: !this.state.open})}>
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
            <Loader loaded={this.state.questionsLoaded} options={options}>
              <InterviewQuestionList
              status={this.props.params.status}
              interviewQuestionList={this.state.interviewQuestionList}
              removeQuestion={this.handleRemoveQuestion}
              updateQuestion={this.handleUpdateQuestion}
              />
            </Loader>
          </div>
        </div>
      </div>
    )
  }
}

export default Interview

