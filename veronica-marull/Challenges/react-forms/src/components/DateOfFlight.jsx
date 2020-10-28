import React, { useState } from 'react';

function DateOfFlight() {

    const [departureValue, setDepartureValue] = useState('');
    const [arrivalValue, setArrivalValue] = useState('');

    

    const  onDepartureChange = (event => {
        setDepartureValue(event.target.value);
    })

    const  onArrivalChange = (event => {
        setArrivalValue(event.target.value);
    })

    return (
        <div>
            <label for="departure-date" id="departure">Fecha de partida:</label>
				<input
					type="date"
					id="departure-date"
					name="departure-date"
                    value={departureValue}
                    onChange={onDepartureChange}
					min="2020-10-09"
					max="2021-07-31"
					required
				/>
            <label for="arrival-date" id="arrival">Fecha de llegada:</label>
				<input
					type="date"
					id="arrival-date"
					name="arrival-date"
                    value={arrivalValue}
                    onChange={onArrivalChange}
					min="2020-10-11"
					max="2021-12-31"
					required
				/>
        </div>
    )
}

export default DateOfFlight