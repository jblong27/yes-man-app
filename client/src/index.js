import React from 'react';
import {render, ReactDOM} from 'react-dom';
import {IntlProvider} from 'react-intl';
import './stylesheets/index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {initialState} from './store'

const store = configureStore(initialState);

const renderApp = () => (

  <IntlProvider locale="en" messages={LocaleData}>
      <Provider store={store}>
          <AppContainer>
              <App />
          </AppContainer>
      </Provider>
  </IntlProvider>

);

function runOnLoaded() {
  render(renderApp(), document.getElementById('root'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  runOnLoaded();
} else {
  window.addEventListener('DOMContentLoaded', runOnLoaded, false);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
