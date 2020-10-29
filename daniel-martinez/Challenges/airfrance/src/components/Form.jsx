import React, { useEffect, useState } from 'react';

import Header from './Header';
import Select from './Select';
import InputDate from './InputDate';
import InputText from './InputText';

import './Form.css';

import airfranceStore from '../stores/airfrance-store';
import { loadForm1 } from '../actions/action-creators';

const viajeForm = ['Ida y vuelta', 'Sólo Ida', 'Destinos múltiples'];

const pasajerosForm = [
	'1 pasajero',
	'2 pasajeros',
	'3 pasajeros',
	'4 pasajeros'
];

const claseForm = [
	'ECONOMY',
	'PREMIUM ECONOMY',
	'ECONOMY BUSINESS',
	'LA PREMIÈRE'
];

function Form() {
	const [form, setForm] = useState(airfranceStore.getForm());
	//const [name, setInputName] = useState(null);

	useEffect(() => {
		airfranceStore.addEventListener(handleChanges);
		if (!form) {
			loadForm1();
		} else {
			console.log(form.nombre);
		}
		return () => airfranceStore.removeEventListener(handleChanges);
	}, [form]);

	function handleChanges() {
		debugger;
		setForm(airfranceStore.getForm());
	}

	return (
		<article>
			<Header />
			<form key="form">
				<section className="passengers10" key="passengers10">
					<p>Book for 10+ passengers</p>
				</section>
				<section className="row first" key="first-row">
					<Select
						name="Viaje:"
						id="viajeForm"
						key="viajeForm"
						options={viajeForm}
					/>
					<Select
						name="Pasajeros:"
						id="pasajerosForm"
						key="pasajerosForm"
						options={pasajerosForm}
					/>
					<Select
						name="Clase:"
						id="claseForm"
						key="claseForm"
						options={claseForm}
					/>
				</section>
				<section className="row second" key="second-row">
					<span className="material-icons" key="material-icons-takeoff">
						flight_takeoff
					</span>
					<InputText label="Salida de:" />
					<span className="material-icons" key="material-icons-land">
						flight_land
					</span>
					<InputText label="Llegada a:" />
				</section>
				<section className="dateAndLabel" key="date-and-label">
					<InputDate label="Fechas de viaje:" />
				</section>
				<section className="checkboxPro" key="checkboxPro">
					<label className="switch" key="switch">
						<input type="checkbox" />
						<span className="slider round"></span>
					</label>
					<p className="pro">Viaje profesional</p>
				</section>
				<section className="row info">
					<div className="name">
						<InputText label="Nombre:" text={form?.nombre} />
					</div>
					<div className="apellido">
						<InputText label="Apellido:" />
					</div>
					<div className="email">
						<InputText label="Email:" />
					</div>
					<div className="num">
						<InputText label="Nº teléfono:" />
					</div>
				</section>
				<section className="buttonBuscar" key="buttonBuscar">
					<button type="button" className="buscar">
						Rellenar auto.
					</button>
					<button type="button" className="buscar">
						Borrar campos
					</button>
				</section>
			</form>
		</article>
	);
}

export default Form;
