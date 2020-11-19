import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux';
import './index.css';
import configureStore from './redux/configureStore';
import App from './App';

const userStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={userStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
