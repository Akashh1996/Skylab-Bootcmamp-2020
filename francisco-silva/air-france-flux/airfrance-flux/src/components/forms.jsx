
import DateFlight from '../date';
import DropDown from '../DropDownComponent/DropDown';
import React, { useEffect, useState } from 'react';
import { loadClass, loadDestination, loadTravelers, loadAirports } from '../actions/action-creator';
import goingAndComingStore from '../store/store';

function SelectOptions() {
	const [flightOptions, setFlightOptions] = useState(null);
	const [travelers, setTravelersOptions] = useState(null);
	const [classOptions, setClassOptions] = useState(null);
	const [airports, setAirports] = useState(null);

	useEffect(() => {
		goingAndComingStore.addEventListener(onChange);
		loadDestination();
		// Cargar los pasajeros
		goingAndComingStore.addEventListener(onChange);
		loadTravelers();
		goingAndComingStore.addEventListener(onChange);
		loadClass();
		goingAndComingStore.addEventListener(onChange);
		loadAirports();
		return () => {
		goingAndComingStore.removeEventListener(onChange);
		};
	});

	function onChange() {
		setFlightOptions(goingAndComingStore.getDestination());
		// setear el valor a pasajeros
		setTravelersOptions(goingAndComingStore.getTravelers());
		setClassOptions(goingAndComingStore.getClass());
		setAirports(goingAndComingStore.getAirports());
		

	}
	

	return (
		<div class="main-wrapper">
			
			
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
				<p>Salida:
					<DropDown options={airports}/>
				</p>
				<p>LLegada:
					<DropDown options={airports}/>
				</p>
				
			</div>
			<div className="flightDate">
				<DateFlight />
			</div>
			
		</div>
	);
}

export default SelectOptions;
