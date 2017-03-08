/**
 * Created by jmichelin on 12/28/16.
 * TODO Fetch and display questions
 */
import React from 'react';
import { Accordion, Panel } from 'react-bootstrap'

class InterviewQuestionList extends React.Component {
  constructor () {
    super();
    this.state = {
      interviewQuestionList: []
    }
  }

  componentWillMount () {
    console.log('InterviewQuestions/List.js => Will Mount');
    let fetchUrl = 'https://infinite-waters-52055.herokuapp.com/interview/questions/list';
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

  /*
  componentDidMount() {
    console.log('InterviewQuestions/List.js => Did Mount');
  }

  componentWillReceiveProps() {
    console.log('InterviewQuestions/List.js => Will Receive Props');
  }

  shouldComponentUpdate() {
    console.log('InterviewQuestions/List.js => Should Component Update');
    return true;
  }

  componentWillUpdate() {
    console.log('InterviewQuestions/List.js => Will Update');
  }

  componentDidUpdate() {
    console.log('InterviewQuestions/List.js => Did Update');
  }
*/

  filter (e) {
    this.setState({filter: e.target.value})
  }

  render () {
    let interviewQuestionList = this.state.interviewQuestionList;
    if(this.state.filter) {
      interviewQuestionList = interviewQuestionList.filter(interviewQuestion =>
        interviewQuestion.genre.toLowerCase()
          .includes(this.state.filter.toLowerCase()))
    }
    return (
      <div>
        <div className="form-group">
          <label>Filter questions</label>
          <input className="form-control" style={{marginBottom: 10}} type="text" placeholder="Start typing to filter" onChange={this.filter.bind(this)}/>
        </div>
        {interviewQuestionList.map(interviewQuestion => <InterviewQuestion key={interviewQuestion._id} interview={interviewQuestion} />)}
      </div>
    )
  }
}


// TODO deleteQuestion

// const InterviewQuestion = (props) => {
//   //console.log('props', props);
//   let header = '('+props.interview.genre + ') ' + props.interview.title + ' - ' + props.interview.timeToAnswer + 'mins to answer';
//   let btnId = 'btn-'+props.interview._id;
//   return (
//     <div className="panel panel-primary">
//       <div className="panel-heading clearfix" key={props.interview._id}>
//         <h4 className="panel-title pull-left">{header}</h4>
//         <div className="input-group-btn">
//           <button className="btn btn-primary pull-right"
//                   onClick={() => {
//                     //console.log(props.interview._id);
//                     $('#'+props.interview._id).toggleClass("in")
//                     $('#btn-'+props.interview._id).toggleClass("glyphicon-triangle-bottom glyphicon-triangle-top")
//                   }}>
//             <i id={btnId} className="glyphicon glyphicon-triangle-bottom"/>
//           </button>
//         </div>
//       </div>
//       <div id={props.interview._id} className="panel-body collapse">
//         <Panel header="Question" bsStyle="danger">
//           <p>{props.interview.questionText}</p>
//         </Panel>
//         <Panel header="Answer" bsStyle="success">
//           <p>{props.interview.answerText}</p>
//         </Panel>
//       </div>
//     </div>
//   )
// }

const InterviewQuestion = (props) => {
  //console.log('props', props);
  let header = '('+props.interview.genre + ') ' + props.interview.title + ' - ' + props.interview.timeToAnswer + 'mins to answer';
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
};



export default InterviewQuestionList
