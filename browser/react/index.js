import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import store from '../store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('app')
);

