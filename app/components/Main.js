/**
 * Created by jmichelin on 12/28/16.
 */
var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <div className="navbar-header">MENU
              <div className="collapse navbar-collapse" id="navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><a href="#/interviewQuestionList/active">Interview Question List</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;