import React, { Component } from 'react';
// import logo from './logo.svg';
import icon from './hr-logo-for-black.png';
import smallIcon from './logoSmall.png';
import hrText from './hr-text-for-black.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="App-header">
          <img src={icon} className="App-logo" alt="logo" />
          <img src={hrText} className="App-logo-text" alt="Hack Reactor" />
          <h2>Mock Interview Manager</h2>
          <nav className="navbar navbar-default" role="navigation">
            <div className="col-sm-7">
              <div className="navbar-header">
                <a className="navbar-brand" href="https://www.hackreactor.com">
                  <img src={smallIcon} alt="Hack Reactor"/>
                </a>
                  <ul className="nav navbar-nav">
                    <li><a href="#/interviewQuestionList/active">Interview Question List</a></li>
                  </ul>
                  <ul className="nav navbar-nav">
                    <li><a href="#/interviewTemplateList/active">Interview Template List</a></li>
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
