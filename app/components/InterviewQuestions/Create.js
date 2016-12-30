/**
 * Created by jmichelin on 12/28/16.
 * TODO form to add interview questions
 */
import React from 'react';

class CreateInterviewQuestions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        "genre": '',
        "title": '',
        "timeToAnswer": 1,
        "questionText": '',
        "answerText": '',
        "status": ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('InterviewQuestions/Create.js ---> event.target.name => ', event.target.name);
    let keyName = event.target.name;
    let newState = {};
    newState[keyName] = event.target.value;
    console.log('InterviewQuestions/Create.js ---> newState => ', newState);
    //this.setState({keyName: event.target.value});
    this.setState(newState);
  }

  handleSubmit(event) {
    console.log('submit event interviewQuestions/Create.js');
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>Create Interview Question Here
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <span className="input-group-addon primary" id="genre">Genre</span>
            <input type="text" className="form-control" placeholder="Enter Genre" value={this.state.genre} name="genre"
                   onChange={this.handleChange}/>
          </div>
          <div className="input-group">
            <span className="input-group-addon primary" id="title">Title</span>
            <input type="text" className="form-control" placeholder="Enter Title" value={this.state.title} name="title"
                   onChange={this.handleChange}/>
          </div>
          <div className="input-group">
            <span className="input-group-addon primary" id="timeToAnswer">How long? in {this.state.timeToAnswer} mins</span>
            <input type="range" min="1" max="20" className="form-control" placeholder="Enter time given for answer" value={this.state.timeToAnswer} name="timeToAnswer"
                   onChange={this.handleChange}/>
          </div>
          <div className="input-group">
            <span className="input-group-addon primary" id="questionText">Question Text</span>
            <textarea rows="5" className="form-control" placeholder="Enter Question Text" value={this.state.questionText} name="questionText"
                      onChange={this.handleChange} />
          </div>
          <div className="input-group">
            <span className="input-group-addon primary" id="answerText">Answer Text</span>
            <textarea rows="5" className="form-control" placeholder="Enter Answer Text" value={this.state.answerText} name="answerText"
                      onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default CreateInterviewQuestions