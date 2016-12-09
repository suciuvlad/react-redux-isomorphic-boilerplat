// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const rootRoute = {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: require('./templates/application'),
    childRoutes: [
      require('./routes/about')
    ]
  }]
};

export default rootRoute;
