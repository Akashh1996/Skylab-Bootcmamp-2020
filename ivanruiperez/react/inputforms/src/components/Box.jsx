import React from 'react';
import SelectInput from './SelectInput';
import Input from './Input';
import Button from './Button';
import Toggle from './Toggle';
import './Box.css';

function Box(props) {
	return (
		<section id="section">
			<div id="div-selects">
				<SelectInput optionValues={props.optionValues} />
				<SelectInput optionValues={props.optionPassengers} />
				<SelectInput optionValues={props.optionClassType} />
			</div>
			<div id="div-inputs">
				<Input type="text" placeholder={'Salida de*'} />
				<Input type="text" placeholder={'Llegada a*'} />
			</div>
			<div id="div-inputDate">
				<Input type="date" />
			</div>
			<div id="buttons">
				<Button search={'Buscar Vuelos'} />
				<Toggle id="toggle" />
			</div>
		</section>
	);
}

export default Box;
