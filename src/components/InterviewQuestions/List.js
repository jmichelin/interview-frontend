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
      interviewQuestionList: []
    }
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
  //   let fetchUrl = 'https://infinite-waters-52055.herokuapp.com/interview/questions/list'
  //   fetch(fetchUrl)
  //     .then(
  //       (response) => {
  //         return response.json()
  //       }
  //     )
  //     .then(
  //       (interviewQuestionList: []) => {
  //         //console.log('+++interviewQuestions/List.js ---> interviewQuestionList => ', interviewQuestionList);
  //         return this.setState({interviewQuestionList})
  //       }
  //     )
  // }

  filter (e) {
    this.setState({filter: e.target.value})
  }

  render () {
    //console.log('List', this.props.interviewQuestionList);

    let interviewQuestionList = this.props.interviewQuestionList

    if(this.state.filter) {
      interviewQuestionList = interviewQuestionList.filter(interviewQuestion =>
        interviewQuestion.genre.toLowerCase()
          .includes(this.state.filter.toLowerCase()))
    }

    let interviewQuestions = interviewQuestionList.map((interviewQuestion, index) => {
        let curKey = interviewQuestion._id||index;
        return <InterviewQuestion interview={interviewQuestion} key={curKey}/>
    });

    //console.log('interviewQuestions length and value => \n', interviewQuestions.length, '\n', interviewQuestions);

    return (

      <div>
        <div className="form-group">
          <label>Filter questions</label>
          <input className="form-control" style={{marginBottom: 10}} type="text" placeholder="Start typing to filter" onChange={this.filter.bind(this)}/>
        </div>
        <div>{interviewQuestions}</div>
        {/*{interviewQuestionList.map((interviewQuestion) =>*/}
          {/*<InterviewQuestion interview={interviewQuestion}*/}
          {/*/>*/}
        {/*)}*/}
      </div>
    )
  }
}


// TODO deleteQuestion

const InterviewQuestion = (props) => {
  //console.log('props', props);
  let header = '('+props.interview.genre + ') ' + props.interview.title + ' - ' + props.interview.timeToAnswer + 'mins to answer ' + props.interview._id;
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

InterviewQuestionList.propTypes = {
  status: React.PropTypes.string.isRequired,
  interviewQuestionList: React.PropTypes.array.isRequired
};

export default InterviewQuestionList
