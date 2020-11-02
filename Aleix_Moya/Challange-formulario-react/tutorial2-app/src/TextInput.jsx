import React, {useState} from 'react';

function TextInput(props){
    const[inputValue, setInputValue] = useState(
        {
        viaje:'Ida y Vuelta',
        pasajeros: '1 Pasajero',
        clase1: 'ECONOMY',
        clase2: 'BUSSINESS',
        salida: 'Salida de*',
        llegada: 'Llegada en*',
        fechas: 'Fechas de viaje'    
        }
    );
    return (
        <>
            <header>
                <h2>Reservar un vuelo</h2>
                <h2 id="title2">Reservar un vuelo con millas</h2>
            </header>
            <ul class="Vuelo">
                <li>
                    Viaje
                    <select>
                        <option value="Ida">Ida</option>
                        <option value="Ida y Vuelta">Ida y Vuelta</option>
                    </select>
                </li>
                <li>
                    Pasajeros
                    <input 
                        type = "text" 
                        value = {inputValue.pasajeros} 
                        onChange = {(e) =>{
                        setInputValue(e.target.value.pasajeros)
                    }}/>
                </li>
                <li>
                    Clase
                    <select>
                        <option value={inputValue.clase1}>ECONOMY</option>
                        <option value={inputValue.clase2}>BUSSINESS</option>
                    </select>
                </li>
            </ul>  
            <ul class="exit">
                <li>
                    <input 
                        type = "text" 
                        value = {inputValue.salida}                             
                        onChange = {(e) =>{
                        setInputValue(e.target.salida)
                    }}/>
                </li>
                <li>
                    <input 
                        type = "text" 
                        value = {inputValue.llegada} 
                        onChange = {(e) =>{
                        setInputValue(e.target.value.legada)
                    }}/>
                </li>
            </ul>
            <ul class="exit">
                <li>
                    <input 
                        type = "text" 
                        value = {inputValue.fechas} 
                        onChange = {(e) =>{
                        setInputValue(e.target.value.fechas)
                    }}/>
                </li>
                <li>
                    <button class="botonVuelos">Buscar Vuelo</button>
                </li>
            </ul>
        </>
    );
}


export default TextInput;