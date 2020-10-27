import React from 'react';
import SelectInput from './SelectInput';
import Input from './Input';
import Button from './Button';
import Toggle from './Toggle';

function Box(props) {
	return (
		<section>
			<SelectInput optionValues={props.optionValues} />
			<SelectInput optionValues={props.optionPassengers} />
			<SelectInput optionValues={props.optionClassType} />
			<Input type="text" placeholder={'Salida de*'} />
			<Input type="text" placeholder={'Llegada a*'} />
			<Input type="date" />
			<Button search={'Buscar Vuelos'} />
			<Button id={'toggle'} search={'Viaje Profesional'} />
			<Toggle />
		</section>
	);
}

export default Box;
