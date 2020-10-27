import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import Sum from './Sum';

import PropTypes from 'prop-types';
import ConditionalDisplay from './ConditionalDisplay';
import TextInput from './TextInput';

ReactDOM.render(
	<React.StrictMode>
		<TextInput />
	</React.StrictMode>,
	document.getElementById('root')
);

/*
let isVisible = true;
ReactDOM.render(
	<React.StrictMode>
		<ConditionalDisplay isVisible={isVisible}>
			<div>La suma es 0</div>
			<span>La suma es mayor que 0</span>
		</ConditionalDisplay>
	</React.StrictMode>,
	document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
