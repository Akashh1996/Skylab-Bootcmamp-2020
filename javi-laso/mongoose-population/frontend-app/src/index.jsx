import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux';
import './index.css';
import configureStore from './redux/configureStore';
import App from './App';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
