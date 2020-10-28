import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Box.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SelectInput from './components/SelectInput';
import Input from './components/Input';
import Button from './components/Button';
import Toggle from './components/Toggle';
import Box from './components/Box';

const optionsFlights = ['Ida y vuelta', 'Solo ida', 'Destinos múltiples'];
const passengers = [
	'1 pasajero',
	'2 pasajeros',
	'3 pasajeros',
	'4 pasajeros',
	'5 pasajeros',
	'6 pasajeros',
	'7 pasajeros'
];
const classType = ['ECONOMY', 'PREMIUM ECONOMY', 'BUSINESS', 'LA PREMIÈRE'];

ReactDOM.render(
	<React.StrictMode>
		<Box
			optionValues={optionsFlights}
			optionPassengers={passengers}
			optionClassType={classType}
		/>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
