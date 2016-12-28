/**
 * Created by jmichelin on 12/28/16.
 */
var React = require('react');
var reactDOM = require('react-dom');
var Router = require('react-router').Router;

var routes = require('./config/routes');

reactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);