/**
 * Created by jmichelin on 1/17/17.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import Home from '../components/Home';
//import Main from '../components/Main';
import InterviewList from '../components/InterviewList';
import InterviewTemplates from '../components/InterviewTemplates/List'

module.exports = (
  <Route path="/" component={App}>
    <Route path="interviewQuestionList" component={InterviewList} />
    <Route path="interviewQuestionList/:status" component={InterviewList} />
    <Route path="interviewTemplateList/:status" component={InterviewTemplates} />
    <IndexRoute component={Home} />
  </Route>
);