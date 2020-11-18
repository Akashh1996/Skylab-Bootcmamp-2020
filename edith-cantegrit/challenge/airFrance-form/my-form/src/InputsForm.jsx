import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function InputsForm() {
    const [inputSalida, setSalida] = useState("Salida a *")
    const [inputLlegada, setLlegada] = useState("Llegada a *")
    const [inputOption, setOption] = useState("")
    const [inputClase, setClase] = useState("")
    const [inputPasajero, setPasajero] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const [inputButton, setButton] = useState("");

    function handleChange({target: {value}}, setNameValue) {
        setNameValue(value);
    }

    const optionsViaje = [
        "Ida y vuelta",
        "Sólo Ida",
        "Multiples destinos"
    ];

    const optionsClase = [
        "ECONOMY",
        "PREMIUM ECNOMY",
        "BUSINESS",
        "LA PREMIÈRE"
    ]

    const optionsPasajero = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <>
        <header class="boxTitle">
		    <h4>RESERVAR UN VUELO</h4>
		    <h4>RESERVAR UN VUELO CON MILLAS</h4>
	    </header>

        <div class="passengerSection">
            <div class="passengerSection--box">
                <label class="labelstyle">
                Viaje -
		        <select value={inputOption} onChange={(event) => handleChange(event, setOption)}>
                    {optionsViaje.map((valor)=> <option value={valor}>{valor}</option>)}
		        </select>
                </label>
            </div>

            <div class="passengerSection--box">
                <label class="labelstyle">
                Pasajeros -
		        <select value={inputPasajero} onChange={(event) => handleChange(event, setPasajero)}>
                    {optionsPasajero.map((valor)=> <option value={valor}>{valor}</option>)}
		        </select>
                </label>
            </div>

            <div class="passengerSection--box">
                <label class="labelstyle">
                Clase -
		        <select value={inputClase} onChange={(event) => handleChange(event, setClase)}>
                    {optionsClase.map((valor)=> <option value={valor}>{valor}</option>)}
		        </select>
                </label>
            </div>
        </div>

        <p>   
            Salida:
            <input
		    class="boxIdayVuelta caja"
		    minlength="1"
		    required
		    id="Salida"
            name="Salida"
            type="text"
            value={inputSalida}
            onChange={(event) => handleChange(event, setSalida)}
		    />
        </p>
        <p>   
            Llegada:   
            <input
		    class="boxIdayVuelta caja"
		    minlength="1"
		    required
		    id="Llegada"
            name="Llegada"
            type="text"
            value={inputLlegada}
            onChange={(event) => handleChange(event, setLlegada)}
		    />
        </p>

        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

        <button
		    id="buttonBuscar"
            name="buttonBuscar"
            type="button"
            class="buttonBuscar"
            value={inputButton}
            onChange={(event) => handleChange(event, setButton)}
        >Buscar vuelos</button>

        </>    
    );
}

export default InputsForm;
