import React from 'react';
import Select from './Select.jsx'
import Input from './Input.jsx'

let viaje = ['Ida', 'Ida y Vuelta', 'Destinos']
let pasajeros = ['1 Pasajero', '2 Pasajeros', '3 Pasajeros', '4 Pasajeros', 'Más Opciones']
let clase = ['ECONOMY','PREMIUM ECONOMY','LA PREMIÈRE']

function Form() {
    return (
        <>
        <div className="row">
            <a href="">Book for 10+ passengers</a>
        </div>

        <div className="row">
            <Select option={viaje} value={"Viaje"}/>
            <Select option={pasajeros} value={"Pasajeros"}/>
            <Select option={clase} value={"Clase"}/>
        </div>

        <div className="row">
            <Input valueInput={["salida", "Salida de *","Por favor, indique la ciudad de salida"]}/>
            <Input valueInput={["llegada", "Llegada a *","Por favor, indique la ciudad de llegada"]}/>
        </div>

        <div className="row">
            <Input valueInput={["fecha", "Fechas de viaje *","Por favor, indique la fecha de ida"]}/>
        </div>

        <div className="button-container">
        <button>Buscar vuelos</button>
        </div>
        </>
    )
}

export default Form