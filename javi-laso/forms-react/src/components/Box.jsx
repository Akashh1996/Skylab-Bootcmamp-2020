import React from 'react';
import SelectInput from './SelectInput';
import Input from './Input';
import Button from './Button';
import Toggle from './Toggle';

function Box(props) {
	return (
		<section className="box">
			<div className="d-flex">
				<div className="fifty-p">
					<SelectInput optionValues={props.optionValues} />
					<SelectInput optionValues={props.optionPassengers} />
				</div>
				<div className="flex-grow-1"></div>
				<SelectInput optionValues={props.optionClassType} />
			</div>
			<div className="d-flex justify-content-between">
				<Input className="city-input" type="text" placeholder={'Salida de *'} />
				<Input className="city-input" type="text" placeholder={'Llegada a *'} />
			</div>
			<Input className="city-input" type="date" />
			<div className="d-flex justify-content-between">
				<Toggle />
				<Button id="search-flight" search={'Buscar Vuelos'} />
			</div>
		</section>
	);
}

export default Box;
