import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Sum from './Sum';

const props = {
	a: 9,
	b: 2
};

const sum = React.createElement(
	'h1',
	{ href: '#' },
	React.createElement(Sum, { ...props }, null)
);

ReactDOM.render(
	<React.StrictMode>
		{/* 	{ 	<Sum a={10} b={3} />
		 }
		<Sum {...props} />
		{		<ClickCounter />
		 } */}
		{sum}
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
