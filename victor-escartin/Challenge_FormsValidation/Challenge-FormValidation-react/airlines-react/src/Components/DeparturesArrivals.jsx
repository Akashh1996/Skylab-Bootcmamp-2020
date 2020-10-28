import React from 'react';

export default function DeparturesArrivals(){

    const departuresOptions = [{options: ['A Corunya, A Corunya Airport', 'Barcelona, Aeroport del Prat', 'Madrid, Barajas Airport'] }]

    return (
        <div id="landings" class="data">
            <div id="departures" >
                <span class="material-icons">flight_takeoff</span>
                <select nameName="departures" id="departures" class="box-options">
                    <option value="predef">Salidas de *</option>
                    <option value="Acorunya">{departuresOptions[0].options[1]}</option>
                    <option value="barcelona">{departuresOptions[0].options[2]}</option>
                    <option value="madrid">{departuresOptions[0].options[3]}</option>
                </select>
            </div>
            <div id="Arrivals">
                <span class="material-icons">flight_land</span>
                <select nameName="arrivals" id="arrivals" class="box-options">
                    <option value="predef">Salidas de *</option>
                    <option value="Acorunya">{departuresOptions[0].options[1]}</option>
                    <option value="barcelona">{departuresOptions[0].options[2]}</option>
                    <option value="madrid">{departuresOptions[0].options[3]}</option>
                </select>
            </div>
            <br></br>
        </div>
    )
}