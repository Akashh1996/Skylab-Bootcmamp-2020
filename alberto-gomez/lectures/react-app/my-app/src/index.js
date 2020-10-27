import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';
import Sum from './Sum';
import ClickCounter from './ClickCounter';

const props = {
	a: 4,
	b: 2,
	showAlert: function (a, b) {
		alert(`El resultado es ${a + b}`);
	}
};
ReactDOM.render(
	<React.StrictMode>
		{React.createElement(Sum, { ...props }, null)}
		<ClickCounter />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
