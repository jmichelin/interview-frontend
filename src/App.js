import React, { Component } from 'react';
// // import logo from './logo.svg';
// import icon from './hr-logo-for-black.png';
// import smallIcon from './logoSmall.png';
// import hrText from './hr-text-for-black.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="App-header">
          <h2>Mock Interview Manager</h2>
          <nav className="navbar navbar-default col-sm-2" role="navigation">
            <div>
              <div className="navbar-header">
                  <ul className="nav navbar-nav">
                    <li><a href="#/interviewQuestionList/active">Interview Question List</a></li>
                  </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="App-main">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
