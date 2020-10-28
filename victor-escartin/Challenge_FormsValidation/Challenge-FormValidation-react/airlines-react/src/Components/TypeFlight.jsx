import React from 'react';

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
                    <select name="viaje" id="viaje" className="box-options">
                        <option value="idaYvuelta">{selectOptions[0].options[0]}</option>
                        <option value="ida">{selectOptions[0].options[1]}</option>
                        <option value="destMultiples">{selectOptions[0].options[2]}</option>
                    </select>
                </p>
            </div>  
            <div id="passengers" className="data">
                <p>
                    <label for="pasajeros">{selectOptions[1].type}</label>
                    <select name="pasajeros" id="pasajeros" className="box-options">
                        <option value="1">{selectOptions[1].options[0]}</option>
                        <option value="2">{selectOptions[1].options[1]}</option>
                        <option value="3">{selectOptions[1].options[2]}</option>
                        <option value="3">{selectOptions[1].options[3]}</option>
                        <option value="3">{selectOptions[1].options[4]}</option>
                    </select>
                </p>
            </div>
            <div id="travelClass" className="data">
                <p>
                    <label for="traveClass">{selectOptions[2].type}</label>
                    <select name="lass" id="travelClass" className="box-options" >
                        <option value="eco" >{selectOptions[2].options[0]}</option>
                        <option value="premium">{selectOptions[2].options[1]}</option>
                        <option value="business">{selectOptions[2].options[2]}</option>
                        <option value="premier">{selectOptions[2].options[3]}</option>
                    </select>
                </p>
            </div>
        </div>
    )
}

export default TypeFlight;