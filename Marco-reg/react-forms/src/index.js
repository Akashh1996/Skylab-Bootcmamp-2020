import React from 'react';
import ReactDOM from 'react-dom';
import index from './index.css';
import Airports from './Airports';
import Date from './date';
import reportWebVitals from './reportWebVitals';
import InputForms from './components/forms';
import DropDown from './DropDownComponent/DropDown';

ReactDOM.render(
	<React.StrictMode>
		<InputForms />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
