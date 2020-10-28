import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Trip from './components/Trip';
import Passenger from './components/Passenger';
import ClassType from './components/ClassType';
import From from './components/From';
import To from './components/To';
import DateOfFlight from './components/DateOfFlight';

ReactDOM.render(
	<React.StrictMode>
		<Trip />
		<Passenger />
		<ClassType />
		<From />
		<To />
		<DateOfFlight />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
