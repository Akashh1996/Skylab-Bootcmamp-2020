import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sum from './components/Sum';
import ClickCounter from './components/ClickCounter';

const props = {
	a: 4,
	b: 2
};

ReactDOM.render(
	<React.StrictMode>
		<Sum />
		{React.createElement(
			'a',
			{ href: 'http://skylabcoders.com' },
			React.createElement(Sum, { ...props }, null)
		)}
		<ClickCounter />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
