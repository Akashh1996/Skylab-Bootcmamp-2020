import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from "./Hello";
import Sum from "./Sum";
import Sub from "./Sub";
import ClickCounter from "./ClickCounter"


const props = {
  a: 14,
  b: 2
}

ReactDOM.render(
  <React.StrictMode>
    <Hello city="MARS"/>
    <ClickCounter/>
    <Sum {...props}/>
    <Sub a={120} b={3} c={12}/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
