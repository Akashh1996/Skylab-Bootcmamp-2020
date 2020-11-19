import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import SearchInput from './components/SearchInput';
import Item from './components/Item';
import store from './Store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <SearchInput />
      <Item />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
