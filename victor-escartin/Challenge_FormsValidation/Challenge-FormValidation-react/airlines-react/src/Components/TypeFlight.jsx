import React from 'react';
import DropDown from './DropDown';

function TypeFlight() {

    const selectOptions = [
        {type: 'Viaje', options: ['Ida y vuelta', 'Solo ida', 'Destinos múltiples']}, 
        {type: 'Pasajeros *', options: ['1 Pasajero','2 Pasajeros','3 Pasajeros','4 Pasajeros','5 Pasajeros',]}, 
        {type: 'Clase', options: ['ECONOMY', 'PREMIUM ECONOMY', 'BUSINESS', 'LA PREMIÈRE']}
    ];

    return (
        <div className="travelData">
            <div id="travel" className="data">
                <p>
                    <label type="text" for="viaje">{selectOptions[0].type}</label>
                    <DropDown optionValues={selectOptions[0].options}/>                  
                </p>
            </div>  
            <div id="passengers" className="data">
                <p>
                    <label for="pasajeros">{selectOptions[1].type}</label>
                    <DropDown optionValues={selectOptions[1].options}/>
                </p>
            </div>
            <div id="travelClass" className="data">
                <p>
                    <label for="traveClass">{selectOptions[2].type}</label>
                    <DropDown optionValues={selectOptions[2].options}/>
                </p>
            </div>
        </div>
    )
}

export default TypeFlight;