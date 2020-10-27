import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ConditionalDisplay from './ConditionalDisplay.jsx';


ReactDOM.render(
  <React.StrictMode>
    <ConditionalDisplay isVisible={true}>
      <h1>Skylab mola molt!</h1>
    </ConditionalDisplay>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// {React.createElement(
//   'h1', 
//   null,
//   React.createElement(Sum,{...props},null)
