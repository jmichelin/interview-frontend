/**
 * Created by jmichelin on 12/28/16.
 * TODO Fetch and display questions
 */
import React from 'react';

class InterviewQuestionList extends React.Component {
  constructor () {
    super()
    this.state = {
      interviewQuestionList: [],
      items: []
    }
  }

  componentWillMount () {
    let fetchUrl = 'https://infinite-waters-52055.herokuapp.com/interview/questions/list'
    fetch(fetchUrl)
      .then(
        (response) => {
          return response.json()
        }
      )
      .then(
        (
          items: []) => {
          console.log('interviewQuestions => ', items);
          return this.setState({items})
        }
      )
  }

  filter (e) {
    this.setState({filter: e.target.value})
  }
  render () {
    let items = this.state.items
    if(this.state.filter) {
      items = items.filter(item =>
        item.genre.toLowerCase()
          .includes(this.state.filter.toLowerCase()))
    }
    return (
      <div>
        <input type="text" onChange={this.filter.bind(this)}/>
        {items.map(item => <Interview key={item._id} interview={item} />)}
      </div>
    )
  }
}

const Interview = (props) => {
  return (
    <div>
      <h3>{props.interview.genre}</h3>
      <h4>{props.interview.title} - Time to Answer {props.interview.timeToAnswer} mins</h4>
      <p>{props.interview.questionText}</p>
      <p>{props.interview.answerText}</p>
    </div>
  )
}


//   render() {
//     let interviewQuestionList = this.state.interviewQuestionList
//     if(this.state.filter) {
//       interviewQuestionList = interviewQuestionList.filter(interviewQuestion =>
//         interviewQuestion.genre.toLowerCase()
//           .includes(this.state.filter.toLowerCase()))
//     }
//
//     let items = this.state.items
//     if(this.state.filter) {
//       items = items.filter(item =>
//         item.genre.toLowerCase()
//           .includes(this.state.filter.toLowerCase()))
//     }
//
//     return (
//       <div>
//         <input type="text" onChange={this.filter.bind(this)}/>
//         <h4>Interview Question List Here {this.props.status}</h4>
//         <div>
//           {interviewQuestionList.map(item => <InterviewQuestion key={item._id} interview={item} />)}
//         </div>
//       </div>
//     )
//   }
// }
//
// const InterviewQuestion = (props) => {
//   return (
//     <div>
//       <h3>{props.interview.genre}</h3>
//       <h4>{props.interview.title} - Time to Answer {props.interview.timeToAnswer} mins</h4>
//       <p>{props.interview.questionText}</p>
//       <p>{props.interview.answerText}</p>
//     </div>
//   )
// }

export default InterviewQuestionList

// var InterviewQuestionList = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h4>Interview Question List Here {this.props.status}</h4>
//         <p>{this.props.interviewQuestionList}</p>
//       </div>
//     )
//   }
// });
//
// module.exports = InterviewQuestionList;