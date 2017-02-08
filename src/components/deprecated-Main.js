/**
 * Created by jmichelin on 12/28/16.
 */
import React from 'react';
import icon from '../hr-logo-for-black.png';
import hrText from '../hr-text-for-black.png'
import '../App.css';
//header
class Main extends React.Component {
  render() {
    return (
    <div className="App container-fluid">
      <div className="App-header container-fluid">
        <img src={icon} className="App-logo" alt="logo" />
        <img src={hrText} className="App-logo-text" alt="Hack Reactor" />
        <h2>HR Interview Manager</h2>
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7">
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

export default Main