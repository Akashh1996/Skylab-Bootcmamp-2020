import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Hello from './Hello';
import Sum from './Sum';
import ClickCounter from './ClickCounter';
import reportWebVitals from './reportWebVitals';

const props = {
  a:10,
  b:10,
  showAlert: function() {
    alert(`El resultado es ${props.a + props.b}`);
  }
}

const sum = React.createElement(Sum, {...props}, null);

ReactDOM.render(
  <React.StrictMode>
    {sum}
    <ClickCounter />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Hello dateNow = {Date()}/>
//     <App />
//     <Sum a={10} b= {10}/>
//     <Sum {...props}/>
//     <ClickCounter />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
