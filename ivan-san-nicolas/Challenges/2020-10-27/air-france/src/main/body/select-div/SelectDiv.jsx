import React from 'react';
import './selectDiv.css';
import SelectItem from './select-item/SelectItem';

function SelectDiv() {

    const travelTitle = 'Viaje';
    const travelDirection = ['Ida', 'Vuelta', 'Ida y vuelta'];
    const passengersTitle = 'Pasajeros';
    const passengers = ['1 Pasajero', '2 Pasajeros', '3 Pasajeros', '4 Pasajeros']
    const classTitle = 'Clase';
    const classType = ['Poor', 'Economy']

    return (
        
        <div class="row">
            <SelectItem optionList={travelDirection} selectTitle={travelTitle}/>
            <SelectItem optionList={passengers} selectTitle={passengersTitle}/>
            <SelectItem optionList={classType} selectTitle={classTitle}/>
        </div>
    )
}

export default SelectDiv;