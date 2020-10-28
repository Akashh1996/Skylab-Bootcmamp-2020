import React from 'react';
import './../BookingFlightForm/BookFlightForm.css';
import DropDown from '../DropDown';
import TextInput from '../TextInput/TextInput';
import Date from '../Date/Date';
import Submit from './../Submit/Submit';

function BookingFlightForm() {
	const trip = ['Round trip', 'One-way', 'Multi-city'];
	const passanger = ['Adult', 'Child', 'Infant', 'Youth', 'Senior'];
	const cabin = ['ECONOMY', 'BUSINESS', 'PREMIUM ECONOMY', 'LA PRIMIÈR'];

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
