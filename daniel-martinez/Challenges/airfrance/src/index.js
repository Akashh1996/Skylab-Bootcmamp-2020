import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Select from './Select';
import InputText from './InputText';
import InputDate from './InputDate';
import reportWebVitals from './reportWebVitals';

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

ReactDOM.render(
	<React.StrictMode>
		<article>
			<Header />
			<form>
				<section className="passengers10">
					<a href="#">Book for 10+ passengers</a>
				</section>
				<section className="row first">
					<Select name="Viaje:" id="viajeForm" options={viajeForm} />
					<Select
						name="Pasajeros:"
						id="pasajerosForm"
						options={pasajerosForm}
					/>
					<Select name="Clase:" id="claseForm" options={claseForm} />
				</section>
				<section className="row second">
					<span className="material-icons">flight_takeoff</span>
					<InputText label="Salida de:" />
					<span className="material-icons">flight_land</span>
					<InputText label="Llegada a:" />
				</section>
				<section className="dateAndLabel">
					<InputDate label="Fechas de viaje:" />
				</section>
				<section className="checkboxPro">
					<label className="switch">
						<input type="checkbox" />
						<span className="slider round"></span>
					</label>
					<p className="pro">Viaje profesional</p>
				</section>
				<section className="buttonBuscar">
					<button type="button" className="buscar">
						Buscar vuelos
					</button>
				</section>
			</form>
		</article>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
