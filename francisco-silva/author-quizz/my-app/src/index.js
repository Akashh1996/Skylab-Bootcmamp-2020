import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Main from './Main';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);