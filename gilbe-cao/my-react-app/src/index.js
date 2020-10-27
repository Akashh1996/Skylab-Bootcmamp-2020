import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ConditionalDisplay, { x, w } from './components/ConditionalDisplay';

let isVisible = false;
const obj = { value: x, otroValue: w };

ReactDOM.render(
	<React.StrictMode>
		<ConditionalDisplay show={isVisible} obj={obj}>
			<h1>Skylab mola molt!</h1>
		</ConditionalDisplay>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
