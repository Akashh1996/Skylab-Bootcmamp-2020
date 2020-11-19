import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchInput from './components/SearchInput';
import Item from './components/Item';

ReactDOM.render(
  <React.StrictMode>
    <SearchInput />
    <Item />
  </React.StrictMode>,
  document.getElementById('root'),
);
