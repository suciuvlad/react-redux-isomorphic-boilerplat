import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'common/configure-store';
import rootRoute from 'common/routes';

const store = configureStore(window.__INITIAL_STATE__);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={rootRoute} />
  </Provider>,
  document.getElementsByClassName('js-reactApp')[0]
)
