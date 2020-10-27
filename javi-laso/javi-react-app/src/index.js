import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import Hello from './Hello';
// import ClickCounter from './components/ClickCounter';
import Sum from './components/Sum';

const props = {
	a: 5,
	b: 8,
	showAlert: (a, b) => {
		alert(`El resultado es ${a + b}`);
	}
};

const sum = React.createElement(Sum, { ...props }, null);

ReactDOM.render(
	<React.StrictMode>{sum}</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
