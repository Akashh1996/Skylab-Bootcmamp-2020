import React from 'react';
import Select from './Select';
import TextInput from './TextInput';
import Textarea from './Textarea';
import EmailInput from './EmailInput';
import TelInput from './TelInput';
import ButtonInput from './ButtonInput';

function Main() {
    const selectTypes = [
        {type: 'Viaje', options: ['Ida y vuelta', 'Solo ida', 'Destinos múltiples']}, 
        {type: 'Pasajeros *', options: ['Adulto', 'Niño (2 - 11 años)', 'Bebé (0 - 23 meses)', 'Joven (18 - 24 años)', 'Senior (65 años o más)', 'Estudiante nivel superior (18 - 29 años)']}, 
        {type: 'Clase', options: ['ECONOMY', 'PREMIUM ECONOMY', 'BUSINESS', 'LA PREMIÈRE']}
    ];

    return (
        <main>
			<a href="#">Book for 10+ passengers</a>
			<form id="form" action="">
                <div className="select">
                    {selectTypes.map((object) => <Select type={object.type} options={object.options}/>)}
                </div>
				<TextInput />
				<Textarea />
				<EmailInput />
				<TelInput />
				<ButtonInput />
			</form>
		</main>
    )
}

export default Main;