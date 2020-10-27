import React from "react";
import SelectTrip from './SelectTrip';
import Date from './Date';
import Class from './Class'
import Pasajeros from './Pasajeros'
import Salida from './Salida'
import Destino from './Destino'
import './main.css'


const optionsTrip =["Ida y vuela", "Solo ida"]
const optionsClass =["Economica", "Ejecutiva", "Primera Clase"]
const optionsTravelers =[1, 2, 3, 4, "5 o más"]

function Form() {
    return(
        
            <div className="main-wrapper">
                <h1>AirSkyFluX</h1>
            <img src="https://smilehoteles.es/wp-content/uploads/2018/06/Playas-caribe-1080x675.jpg" id="bg" alt=""></img>
            <div class="trip-class_wrapper">
                <SelectTrip dropdownOptionsTrip ={optionsTrip}/>
                <Class dropdownOptionsClass ={optionsClass}/>
            </div>
            <div class="people-date_wrapper">
                <Pasajeros dropdownOptionsTravelers ={optionsTravelers} />
                <Date></Date>
            </div>
            <div class="departure-arrival_wrapper">
                <Salida/>
                <Destino/>
            </div>
            <button>Reserva!</button>
            </div>
        
    )



}







export default Form;