import React, { useEffect, useState } from 'react';
import './../BookingFlightForm/BookFlightForm.css';
import DropDown from '../DropDown';
import TextInput from '../TextInput/TextInput';
import Date from '../Date/Date';
import Submit from './../Submit/Submit';
import flightStore from './../stores/store';
import { loadFlightOptions } from './../actions/action-creators';

function BookingFlightForm() {
	const [flightOption, setFlight] = useState(flightStore.getFlightsOptions());
	const [trip, setTrip] = useState(flightOption?.trip);
	const [passanger, setPassanger] = useState(flightOption?.passanger);
	const [cabin, setCabin] = useState(flightOption?.cabin);

	useEffect(() => {
		debugger;
		flightStore.addEventListener(onChange);
		if (!flightOption) {
			loadFlightOptions();
		}

		return () => {
			flightStore.removeEventListener(onChange);
		};
	}, [flightOption]);

	function onChange() {
		const flightOption = flightStore.getFlightsOptions();
		setFlight(flightOption);
		setTrip(flightOption?.trip);
		setPassanger(flightOption?.passanger);
		setCabin(flightOption?.cabin);
	}

	return (
		<form>
			<div className="passangers-detail">
				<DropDown labelName="Trip" options={trip} />
				<DropDown labelName="Passenger" options={passanger} />
				<DropDown labelName="Cabin" options={cabin} />
			</div>
			<div className="location-input">
				<TextInput labelName="Departing from" />
				<TextInput labelName="Arriving at" />
			</div>
			<div>
				<Date />
			</div>

			<Submit />
		</form>
	);
}

export default BookingFlightForm;
