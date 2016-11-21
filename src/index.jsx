import React from 'react';
import ReactDOM from 'react-dom';
import canUseDOM from 'fbjs/lib/ExecutionEnvironment';
import { hashHistory } from 'react-router';

import './styles/App.scss';
import configureStore from './stores';
import Root from './components/Root';
import AuthAPI from './modules/auth/api';

/* initialize */

// to allow :active styles to work in your CSS on a page in Mobile Safari
if (canUseDOM) {
  document.addEventListener('touchstart', () => {}, true);
}

const {
  __ENVS__,
} = window;

AuthAPI.init(__ENVS__);

const store = configureStore({});

ReactDOM.render(
  <Root
    store={store}
    history={((location.protocol === 'file:' || __ENVS__.CLIENT_HISTORY === 'hash') && hashHistory) || undefined}
  />,
  document.getElementById('app'),
);
