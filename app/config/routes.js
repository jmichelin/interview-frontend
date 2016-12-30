/**
 * Created by jmichelin on 12/28/16.
 */
import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Interview from '../components/InterviewList';
import { Router, Route, IndexRoute } from 'react-router';

module.exports = (
  <Route path="/" component={Main}>
    <Route path="interviewQuestionList" component={Interview} />
    <Route path="interviewQuestionList/:status" component={Interview} />
    <IndexRoute component={Home} />
  </Route>
);