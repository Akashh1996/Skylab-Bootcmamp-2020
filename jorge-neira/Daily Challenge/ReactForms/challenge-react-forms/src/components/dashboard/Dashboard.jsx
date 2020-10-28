import React from 'react';
import SelectOption from './SelectOptions';
import HeaderNav from './Header';
import UserLogin from './UserLogin';
import Date from './Date';
import Button from './Button';

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
				<SelectOption
					classType={airFrance.classType}
					flightOptions={airFrance.flightOptions}
					passengers={airFrance.passengers}
				/>
				<Button />
			</form>
		</section>
	);
}

export default FormSection;
