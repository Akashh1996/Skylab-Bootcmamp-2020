import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import ListProduct from './components/ListProduct';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ListProduct />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
