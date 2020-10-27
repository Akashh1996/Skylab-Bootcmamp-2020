import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sum from './Sum';
import reportWebVitals from './reportWebVitals';
import ClickCounter from './ClickCounter';
import ConditionalDisplay from './ConditionalDisplay'

let isVisible=false
ReactDOM.render(
  <React.StrictMode>
    <ClickCounter/>
    <ConditionalDisplay isVisible={isVisible}>
      <h1>Skylab mola molt!</h1>
    </ConditionalDisplay>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
