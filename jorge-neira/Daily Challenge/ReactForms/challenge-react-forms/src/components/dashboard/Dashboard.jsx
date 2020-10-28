import React from 'react';
// import SelectOption from './components/store/SelectOptions';
import HeaderNav from './Header';
import UserLogin from './UserLogin';
import SelectOption from '../store/SelectOptions';
import Date from './Date';
import Input from './Input';
// import Button from './Button';

const airFrance = {
	flightOptions: ['Ida y vuelta', 'Solo ida', 'Destinos múltiples'],
	passengers: [
		'1 pasajero',
		'2 pasajeros',
		'3 pasajeros',
		'4 pasajeros',
		'5 pasajeros',
		'6 pasajeros',
		'7 pasajeros',
		'8 pasajeros',
		'9 pasajeros'
	],
	classType: ['ECONOMY', 'PREMIUM ECONOMY', 'BUSINESS', 'LA PREMIÈRE']
};

function FormSection() {
	return (
		<section className="form-section">
			<HeaderNav />
			<form>
				<UserLogin />
				<Date />
				<SelectOption classType={airFrance.classType} />
				<SelectOption flightOptions={airFrance.flightOptions} />
				<SelectOption passengers={airFrance.passengers} />
				<Input />
				{/* <Button /> */}
			</form>
		</section>
	);
}

export default FormSection;
