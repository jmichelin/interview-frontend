import React, { Component } from 'react';
// import logo from './logo.svg';
import icon from './hr-logo-for-black.png';
import hrText from './hr-text-for-black.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="App-header">
          <img src={icon} className="App-logo" alt="logo" />
          <img src={hrText} className="App-logo-text" alt="Hack Reactor" />
          <h2>HR Interview Manager</h2>
          <nav className="navbar navbar-default" role="navigation">
            <div className="col-sm-7" style={{marginTop: 15}}>
              <div className="navbar-header">
                <div className="navbar" id="navbar-1">
                  <ul className="nav navbar-nav">
                    <li><a href="#/interviewQuestionList/active">Interview Question List</a></li>
                  </ul>
                </div>
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
