import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Form.css';

function Form() {
	const [inputSalida, setSalida] = useState('Salida de*');
	const [inputLlegada, setLlegada] = useState('Llegada a*');
	const [inputOption, setOption] = useState('Tipo');
	const [startDate, setStartDate] = useState(new Date());

	function handleChange({ target: { value } }, setNameValue) {
		setNameValue(value);
	}

	const flightOptions = ['Ida', 'Vuelta', 'Ida y vuelta'];
	const passengersOptions = [
		'1 pasajero',
		'2 pasajeros',
		'3 pasajeros',
		'4 pasajeros',
		'5 pasajeros'
	];
	const fligthClass = ['Economy', 'Premium Economy', 'Business', 'La Premiere'];

	return (
		<div className="form-container">
			<div className="first-row">
				<label className="spaced" htmlFor="">
					Viaje :
					<select
						className="select"
						value={inputOption}
						onChange={(event) => handleChange(event, setOption)}
					>
						{flightOptions.map((value) => (
							<option value={value}>{value}</option>
						))}
					</select>
				</label>
				<label className="spaced" htmlFor="">
					Pasajeros :
					<select
						className="select"
						value={inputOption}
						onChange={(event) => handleChange(event, setOption)}
					>
						{passengersOptions.map((value) => (
							<option value={value}>{value}</option>
						))}
					</select>
				</label>
				<label className="spaced" htmlFor="">
					Clase :
					<select
						className="select"
						value={inputOption}
						onChange={(event) => handleChange(event, setOption)}
					>
						{fligthClass.map((value) => (
							<option value={value}>{value}</option>
						))}
					</select>
				</label>
			</div>
			<div className="second-row">
				<label className="spaced" htmlFor="">
					Salida desde:
					<input
						className="select"
						id="departure"
						name="departure"
						type="text"
						required
						value={inputSalida}
						onChange={(event) => handleChange(event, setSalida)}
					/>
				</label>
				<label className="spaced" htmlFor="">
					Llegada desde:
					<input
						className="select"
						id="arrives"
						name="arrives"
						type="text"
						required
						value={inputLlegada}
						onChange={(event) => handleChange(event, setLlegada)}
					/>
				</label>
			</div>
			<div className="date">
				<p>Fechas de Viaje:</p>
				<DatePicker
					selected={startDate}
					onChange={(date) => setStartDate(date)}
				/>
			</div>
			<div className="btns">
				<div className="switch-position">
					<label className="switch">
						<input type="checkbox" />
						<span className="slider round"></span>
					</label>
					<p>Viaje profesional</p>
				</div>
				<button className="search-button">Add info</button>
				<button className="search-button">Delete info</button>
				<button className="search-button">Buscar Vuelos</button>
			</div>
		</div>
	);
}

export default Form;
