import SelectAirport from '../Airports';
import DateFlight from '../date';
import DropDown from '../DropDownComponent/DropDown';
import React, { useEffect, useState } from 'react';
import { loadClass, loadDestination, loadTravelers } from '../actions/action-creator';
import goingAndComingStore from '../store/store';

function SelectOptions() {
	const [flightOptions, setFlightOptions] = useState(null);
	const [travelers, setTravelersOptions] = useState(null);
	const [classOptions, setClassOptions] = useState(null);
	

	useEffect(() => {
		goingAndComingStore.addEventListener(onChange);
		loadDestination();
		// Cargar los pasajeros
		goingAndComingStore.addEventListener(onChange);
		loadTravelers();
		goingAndComingStore.addEventListener(onChange);
		loadClass();
		return () => {
		goingAndComingStore.removeEventListener(onChange);
		};
	});

	function onChange() {
		setFlightOptions(goingAndComingStore.getDestination());
		// setear el valor a pasajeros
		setTravelersOptions(goingAndComingStore.getTravelers());
		setClassOptions(goingAndComingStore.getClass());

	}
	

	return (
		<div class="main-wrapper">
			<div className="top-bar">
				<a href>RESERVAR UN VUELO</a>
				<a href>RESERVAR UN VUELO CON MILLAS</a>
			</div>
			
			<div className="travelers">
				<p>
					Viajes
					<DropDown options={flightOptions} />
				</p>
				<p>pasajeros
					<DropDown options ={travelers}/>
				</p>
				
				<p>class
					<DropDown options ={classOptions}/>
				</p>
			</div>
			<div className="airports">
				<SelectAirport />
				<SelectAirport />
			</div>
			<div className="flightDate">
				<DateFlight />
			</div>
			
		</div>
	);
}

export default SelectOptions;
