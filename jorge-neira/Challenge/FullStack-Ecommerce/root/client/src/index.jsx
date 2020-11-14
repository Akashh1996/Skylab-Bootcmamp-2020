import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import ListAsus from './components/ListAsus';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ListAsus />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
