import React, { useState } from 'react';

function Trip() {
    const [tripTypeValue, setTripTypeValue] = useState('');

    const  onTripTypeChange = (event => {
        setTripTypeValue(event.target.value);
    })

    return (
        <div>
            <label for="viaje">Viaje</label>

            <select name="viaje" id="viaje" value={tripTypeValue} onChange={onTripTypeChange}>
                <option value="idayvuelta">Ida y vuelta</option>
                <option value="soloida">Sólo ida</option>
                <option value="multiplesdestinos">Múltples destinos</option>
            </select>
        </div>
    )
}








export default Trip