/**
 * Created by jmichelin on 12/28/16.
 */
import React from 'react';
import { Panel } from 'react-bootstrap'
import $ from 'jquery'

class InterviewQuestionList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleRemoveQuestion = this.handleRemoveQuestion.bind(this);
  }

  shouldComponentUpdate() {
    //console.log('InterviewQuestions/List.js => Should Component Update');
    return true;
  }
  /*

   componentDidMount() {
   console.log('InterviewQuestions/List.js => Did Mount');
   }

   componentWillReceiveProps() {
   console.log('InterviewQuestions/List.js => Will Receive Props');
   }


   componentWillUpdate() {
   console.log('InterviewQuestions/List.js => Will Update');
   }

   componentDidUpdate() {
   console.log('InterviewQuestions/List.js => Did Update');
   }
   */

  // componentWillMount () {
  //   console.log('InterviewQuestions/List.js => Will Mount')
  // }

  filter (e) {
    this.setState({filter: e.target.value})
  }

  handleRemoveQuestion (event) {
    event.preventDefault();
    let questionID = event.target.value;
    console.log('value of questionID in List.js => ', questionID);
    this.props.removeQuestion(questionID);
  }


  render () {
    //console.log('List', this.props.interviewQuestionList);

    let interviewQuestionList = this.props.interviewQuestionList || [];

    if(this.state.filter) {
      interviewQuestionList = interviewQuestionList.filter(interviewQuestion => {
        //console.log('interviewQuestion', interviewQuestion);
        return interviewQuestion.genre.toLowerCase()
          .includes(this.state.filter.toLowerCase())})
    }

    let interviewQuestions = interviewQuestionList.map((interviewQuestion, index) => {
        let curKey = interviewQuestion._id||index;
        return <InterviewQuestion interview={interviewQuestion} key={curKey} removeQuestion={this.handleRemoveQuestion.bind(this)}/>
    });

    //console.log('interviewQuestions length and value => \n', interviewQuestions.length, '\n', interviewQuestions);

    return (

      <div>
        <div className="form-group">
          <label>Filter questions</label>
          <input className="form-control" style={{marginBottom: 10}} type="text" placeholder="Start typing to filter" onChange={this.filter.bind(this)}/>
        </div>
        <div>{interviewQuestions}</div>
      </div>
    )
  }
}


// TODO deleteQuestion

const InterviewQuestion = (props) => {
  //handleRemove

  //console.log('props', props);
  let header = '('+props.interview.genre + ') ' + props.interview.title + ' - ' + props.interview.timeToAnswer + ' mins to answer';
  let btnId = 'btn-'+props.interview._id;
  return (
    <div className="panel panel-primary">
      <div className="panel-heading clearfix" key={props.interview._id}>
        <h4 className="panel-title pull-left">{header}</h4>
        <div className="input-group-btn">
          <button className="btn btn-primary pull-right glyphicon glyphicon-remove"
                  onClick={props.removeQuestion}
                  value={props.interview._id}
          >

          </button>
          <button id={btnId} className="btn btn-primary pull-right glyphicon glyphicon-triangle-bottom"
                  onClick={() => {
                    //console.log(props.interview._id);
                    $('#'+props.interview._id).toggleClass("in")
                    $('#btn-'+props.interview._id).toggleClass("glyphicon-triangle-bottom glyphicon-triangle-top")
                  }}>

          </button>
        </div>
      </div>
      <div id={props.interview._id} className="panel-body collapse">
        <Panel header="Question" bsStyle="danger">
          <p>{props.interview.questionText}</p>
        </Panel>
        <Panel header="Answer" bsStyle="success">
          <p>{props.interview.answerText}</p>
        </Panel>
      </div>
    </div>
  )
}


// const InterviewQuestion = (props) => {
//   //console.log('props.interview._id', props.interview._id);
//   let header = '('+props.interview.genre + ') ' + props.interview.title + ' - ' + props.interview.timeToAnswer + ' mins to answer ...or else';
//   return (
//   <div className="panel panel-primary">
//     <Accordion>
//       <Panel header={header} bsStyle="primary" eventKey={props.interview._id}>
//         <Panel header="Question" bsStyle="danger">
//           <p>{props.interview.questionText}</p>
//         </Panel>
//         <Panel header="Answer" bsStyle="success">
//           <p>{props.interview.answerText}</p>
//         </Panel>
//       </Panel>
//     </Accordion>
//   </div>
//   )
// }

InterviewQuestionList.propTypes = {
  status: React.PropTypes.string.isRequired,
  interviewQuestionList: React.PropTypes.array.isRequired,
  removeQuestion: React.PropTypes.func.isRequired
};

export default InterviewQuestionList
