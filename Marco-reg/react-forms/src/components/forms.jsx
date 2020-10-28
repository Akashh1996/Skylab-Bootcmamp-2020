import SelectAirport from '../Airports';
import DateFlight from '../date';
import DropDown from '../DropDownComponent/DropDown';
import React, { useEffect, useState } from 'react';
import { loadDestination, loadTravelers } from '../actions/action-creator';
import goingAndComingStore from '../store/store';

function SelectOptions() {
	const [flightOptions, setFlightOptions] = useState(null);
	const [travelers, setTravelersOptions] = useState(null);

	useEffect(() => {
		goingAndComingStore.addEventListener(onChange);
		loadDestination();
		// Cargar los pasajeros
		goingAndComingStore.addEventListener(onChange);
		loadTravelers();
		return () => {
			goingAndComingStore.removeEventListener(onChange);
		};
	});

	function onChange() {
		setFlightOptions(goingAndComingStore.getDestination());
		// setear el valor a pasajeros
	}

	return (
		<div class="main-wrapper">
			<div className="top-bar">
				<a>RESERVAR UN VUELO</a>
				<a>RESERVAR UN VUELO CON MILLAS</a>
			</div>
			<div className="more-people">
				<p>Reservar para más de 10 pasajeros</p>
			</div>
			<div className="travelers">
				<p>
					Viajes
					<DropDown options={flightOptions} />
				</p>
				<p>pasajeros</p>
				<p>class</p>
			</div>
			<div className="airports">
				<SelectAirport />
				<SelectAirport />
			</div>
			<div className="flightDate">
				<DateFlight />
			</div>
			<div className="pro">
				<h4>Viajes Profesionales</h4>

				<label className="switch">
					<input type="checkbox" />
					<span className="slider"></span>
				</label>
			</div>
			<div className="Search">
				<button className="button">
					<a>Buscar vuelos</a>
				</button>
			</div>
		</div>
	);
}

export default SelectOptions;
