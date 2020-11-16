import React, { useState, useEffect } from 'react';
import {
	loadOptionsFlights,
	loadPassengers,
	loadClassType,
	loadMadridBarcelona,
	eraseForm
} from '../actions/action-creators';
import SelectInput from './SelectInput';
import Input from './Input';
import Button from './Button';
import Toggle from './Toggle';
import store from '../stores/store';

function Box() {
	const [optionsFlights, setOptionsFlights] = useState(
		store.getOptionSFlights()
	);
	const [passengers, setPassengers] = useState(store.getPassengers());
	const [classType, setClassType] = useState(store.getClassType());
	const [departureCity, setDepartureCity] = useState(store.getDepartureCity());
	const [arrivalCity, setArrivalCity] = useState(store.getArrivalCity());
	const [departureDate, setDepartureDate] = useState(store.getDepartureDate());
	const [arrivalDate, setArrivalDate] = useState(store.getArrivalDate());

	useEffect(() => {
		store.addEventListener(changeOptionsFlight);

		if (!optionsFlights) {
			loadOptionsFlights();
		}

		return () => {
			store.removeEventListener(changeOptionsFlight);
		};
	}, [optionsFlights]);

	useEffect(() => {
		store.addEventListener(changePassengers);

		if (!passengers) {
			loadPassengers();
		}

		return () => {
			store.removeEventListener(changePassengers);
		};
	}, [passengers]);

	useEffect(() => {
		store.addEventListener(changeClassType);

		if (!classType) {
			loadClassType();
		}

		return () => {
			store.removeEventListener(changeClassType);
		};
	}, [classType]);

	useEffect(() => {
		store.addEventListener(changeDepartureCity);

		return () => {
			store.removeEventListener(changeDepartureCity);
		};
	}, [departureCity]);

	useEffect(() => {
		store.addEventListener(changeArrivalCity);

		return () => {
			store.removeEventListener(changeArrivalCity);
		};
	}, [arrivalCity]);

	useEffect(() => {
		store.addEventListener(changeDepartureDate);

		return () => {
			store.removeEventListener(changeDepartureDate);
		};
	}, [departureDate]);

	useEffect(() => {
		store.addEventListener(changeArrivalDate);

		return () => {
			store.removeEventListener(changeArrivalDate);
		};
	}, [arrivalDate]);

	function changeOptionsFlight() {
		const optionsFlights = store.getOptionSFlights();
		setOptionsFlights(optionsFlights);
	}

	function changePassengers() {
		const passengers = store.getPassengers();
		setPassengers(passengers);
	}

	function changeClassType() {
		const classType = store.getClassType();
		setClassType(classType);
	}

	function changeDepartureCity() {
		const departureCity = store.getDepartureCity();
		setDepartureCity(departureCity);
	}

	function changeArrivalCity() {
		const arrivalCity = store.getArrivalCity();
		setArrivalCity(arrivalCity);
	}

	function changeDepartureDate() {
		const departureDate = store.getDepartureDate();
		setDepartureDate(departureDate);
	}

	function changeArrivalDate() {
		const arrivalDate = store.getArrivalDate();
		setArrivalDate(arrivalDate);
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
				<Input
					className="city-input"
					type="text"
					value={departureCity}
					placeholder={'Salida de *'}
				/>
				<Input
					className="city-input"
					type="text"
					value={arrivalCity}
					placeholder={'Llegada a *'}
				/>
			</div>
			<div className="d-flex justify-content-between">
				<Input className="city-input" type="date" value={departureDate} />
				<Input className="city-input" type="date" value={arrivalDate} />
			</div>
			<div className="d-flex justify-content-between">
				<Toggle />
				<Button id="search-flight" innerText={'Buscar Vuelos'} />
			</div>
			<div className="d-flex justify-content-around">
				<Button
					id="madrid-barcelona"
					innerText="Vuelo Madrid-Barcelona"
					event={loadMadridBarcelona}
				/>
				<Button id="erase" innerText="Reiniciar formulario" event={eraseForm} />
			</div>
		</section>
	);
}

export default Box;
