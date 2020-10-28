import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
// import Select from './components/Select';
// import TextInput from './components/TextInput';
import './style.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Main />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
