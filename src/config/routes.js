/**
 * Created by jmichelin on 1/17/17.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import Home from '../components/Home';
//import Main from '../components/Main';
import Interview from '../components/InterviewList';

module.exports = (
  <Route path="/" component={App}>
    <Route path="interviewQuestionList" component={Interview} />
    <Route path="interviewQuestionList/:status" component={Interview} />
    <IndexRoute component={Home} />
  </Route>
);