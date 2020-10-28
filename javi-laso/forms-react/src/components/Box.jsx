import React, { useState, useEffect } from 'react';
import {
	loadOptionsFlights,
	loadPassengers,
	loadClassType
} from '../actions/action-creators';
import SelectInput from './SelectInput';
import Input from './Input';
import Button from './Button';
import Toggle from './Toggle';
import store from '../stores/store';

function Box() {
	const [optionsFlights, setOptionsFlights] = useState(store.getOptionSFlights);
	const [passengers, setPassengers] = useState(store.getPassengers);
	const [classType, setClassType] = useState(store.getClassType);

	useEffect(() => {
		store.addEventListener(onChange);

		return () => {
			store.removeEventListener(onChange);
		};
	}, [optionsFlights, passengers, classType]);

	function onChange() {
		const optionsFlights = store.getOptionSFlights();
		setOptionsFlights(optionsFlights);
		const passengers = store.getPassengers();
		setPassengers(passengers);
		const classType = store.getClassType();
		setClassType(classType);
	}

	return (
		<section className="box">
			<div className="d-flex">
				<div className="fifty-p">
					<SelectInput optionValues={optionsFlights} />
					<SelectInput optionValues={passengers} />
				</div>
				<div className="flex-grow-1"></div>
				<SelectInput optionValues={classType} />
			</div>
			<div className="d-flex justify-content-between">
				<Input className="city-input" type="text" placeholder={'Salida de *'} />
				<Input className="city-input" type="text" placeholder={'Llegada a *'} />
			</div>
			<Input className="city-input" type="date" />
			<div className="d-flex justify-content-between">
				<Toggle />
				<Button id="search-flight" search={'Buscar Vuelos'} />
			</div>
		</section>
	);
}

export default Box;
