import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header.js';
import List2 from './List/List2';
// import List from './List/List';
// import Dashboard from './Dashboard/Dashboard';
// import Detail2 from './Detail/Detail2.js';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<List2 />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
