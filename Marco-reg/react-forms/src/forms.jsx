import React from 'react'
import SelectAirport from './Airports';
import DateFlight from './date';
import DropDown from './DropDownComponent/DropDown'




const dropDownOptions = ['Ida y Vuelta', 'Sólo ida', 'Múltiples destinos'];
const number = [1, 2, 3, '3 o más'];
const Class=['Premium','Economy','MaxiPremium',`You ain't got enough Money`];




function InputForms(){

    return(
        <div>
            <div className="top-bar">
                <a>RESERVAR UN VUELO</a>
                <a>RESERVAR UN VUELO CON MILLAS</a>
            </div>
            <div className="more-people">
                <p>Reservar para más de 10 pasajeros</p>

            </div>
            <div className="travelers">
                <p>Viajes
                <DropDown options={dropDownOptions} />
                </p>
                <p>pasajeros
                <DropDown options={number} />
                </p>
                <p>class
                     <DropDown options={Class} />
                </p>

            </div>
            <div className="airports">
            <SelectAirport/>
            <SelectAirport/>
            </div>
            <div className="flightDate">
                <DateFlight/>
            </div>
            <div>
                <h2>Viajes Profesionales</h2>

                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                </label>
            </div>

           
		    

        </div>
        
    )

}


export default InputForms;