import React, { useState } from 'react';

function Passenger() {
    const [passengerValue, setPassengerValue] = useState('');

    const  onPassengerChange = (event => {
        setPassengerValue(event.target.value);
    })

    return (
        <div>
            <label for="passenger">Pasajeros</label>

            <select name="passenger" id="passenger" value={passengerValue} onChange={onPassengerChange}>
                <option value="adulto">Adulto</option>
                <option value="bebe">Bebé</option>
                <option value="niño">Niño(2 a 11)</option>
                <option value="senior">Senior(más 65)</option>
            </select>
        </div>
    )
}

export default Passenger