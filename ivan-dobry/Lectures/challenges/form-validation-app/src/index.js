import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import SelectionInput from './components/SelectionInput';
import RegularInput from './components/RegularInput';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<SelectionInput />
		<RegularInput />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
