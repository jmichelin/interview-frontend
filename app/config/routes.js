/**
 * Created by jmichelin on 12/28/16.
 */
var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Interview = require('../components/InterviewList')
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
    <Route path="interviewQuestionList/:status" component={Interview} />
    <IndexRoute component={Home} />
  </Route>
);