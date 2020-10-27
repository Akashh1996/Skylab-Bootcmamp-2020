import React, {useState} from 'react';
import SelectOptions from './SelectOptions';

function Select() {
    const [typeOfFlight, setTypeOfFlight] = useState('');
    const [typeOfPassenger, setTypeOfPassenger] = useState('');
    const [typeOfClass, setTypeOfClass] = useState('');

    function handleChange({target: {value}}, setValue) {
        setValue(value);
	}
	
	const typeOfFlighSelect = ['Ida y vuelta', 'Solo ida', 'Destinos múltiples'];
	const typeOfPassengerSelect = ['Adulto', 'Niño (2 - 11 años)', 'Bebé (0 - 23 meses)', 'Joven (18 - 24 años)', 'Senior (65 años o más)', 'Estudiante nivel superior (18 - 29 años)']
	const typeOfClassSelect = ['ECONOMY', 'PREMIUM ECONOMY', 'BUSINESS', 'LA PREMIÈRE']

    return (
        <div className="select">
					<div className="select-item">
						<label htmlFor="viaje">Viaje</label>
						<select name="viaje" id="viaje" value={typeOfFlight} onChange={(event) => handleChange(event, setTypeOfFlight)}>
							<option value="Ida y vuelta">Ida y vuelta</option>
							<option value="Solo ida">Solo ida</option>
							<option value="Destinos múltiples">Destinos múltiples</option>
						</select>
					</div>
					<div className="select-item">
						<label htmlFor="pasajeros">Pasajeros *</label>
						<select name="pasajeros" id="pasajeros" required value={typeOfPassenger} onChange={(event) => handleChange(event, setTypeOfPassenger)}>
							<option value="Ida y vuelta">Adulto</option>
							<option value="Niño">Niño (2 - 11 años)</option>
							<option value="Bebé">Bebé (0 - 23 meses)</option>
							<option value="Joven">Joven (18 - 24 años)</option>
							<option value="Senior">Senior (65 años o más)</option>
							<option value="Estudiante">
								Estudiante nivel superior (18 - 29 años)
							</option>
						</select>
					</div>
					<div className="select-item">
						<label htmlFor="clase">Clase</label>
						<select name="clase" id="clase" value={typeOfClass} onChange={(event) => handleChange(event, setTypeOfClass)}>
							<option value="ECONOMY">ECONOMY</option>
							<option value="PREMIUM ECONOMY">PREMIUM ECONOMY</option>
							<option value="BUSINESS">BUSINESS</option>
							<option value="LA PREMIÈRE">LA PREMIÈRE</option>
						</select>
					</div>
				</div>
    )
}

export default Select;