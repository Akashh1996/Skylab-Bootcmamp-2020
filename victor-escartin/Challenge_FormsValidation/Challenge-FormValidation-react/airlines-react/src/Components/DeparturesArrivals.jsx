import React from 'react';
import DropDown from './DropDown';

export default function DeparturesArrivals(){

    const departuresOptions = [{options: ['A Corunya, A Corunya Airport', 'Barcelona, Aeroport del Prat', 'Madrid, Barajas Airport'] }]

    return (
        <div id="landings" class="data">
            <div id="departures" >
                <span class="material-icons">flight_takeoff</span>
                <DropDown optionValues={departuresOptions[0].options}/>
            </div>
            <div id="Arrivals">
                <span class="material-icons">flight_land</span>
                <DropDown optionValues={departuresOptions[0].options}/>
            </div>
            <br></br>
        </div>
    )
}

