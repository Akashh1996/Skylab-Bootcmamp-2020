import React from 'react';

import InputSelect from '../Inputs/InputSelect';
import InputText from '../Inputs/InputText';
import InputDate from '../Inputs/InputDate';
import './Form.css';

const labelViaje = 'Viaje';
const selectViaje = ['Ida y vuelta', 'Sólo ida', 'Destinos múltiples'];
const labelPasajeros = 'Pasajeros *';
const pasajeros = ['1 pasajero', '2 pasajeros', '3 pasajeros'];
const labelClase = 'Clase';
const clase = ['ECONOMY', 'PREMIUM ECONOMY', 'BUSINESS', 'LA PREMIÈRE'];

const inputSalida = 'Salida de *';
const inputLlegada = 'Llegada a *';

function Form() {
	return (
		<>
			<div className="formsComponent">
				<div className="selectsComponent">
					<InputSelect label={labelViaje} selectOptions={selectViaje} />
					<InputSelect label={labelPasajeros} selectOptions={pasajeros} />
					<InputSelect label={labelClase} selectOptions={clase} />
				</div>
				<div className="inputComponents">
					<InputText label={inputSalida} />
					<InputText label={inputLlegada} />
				</div>
				<div className="inputDate">
					<InputDate />
				</div>
				<div class="checkbox">
					<label class="switch">
						<input type="checkbox" />
						<span class="slider round"></span>
					</label>
					<label class="checkbox__label" for="checkbox">
						Viaje profesional
					</label>
				</div>
				<div class="search">
					<button class="buttonSearch" type="button">
						Buscar vuelos
					</button>
				</div>
			</div>
		</>
	);
}

export default Form;
