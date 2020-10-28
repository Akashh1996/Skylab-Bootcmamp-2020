import React from 'react';
import DropDown from './DropDownComponent/DropDown';



const flightOptions = ['ida y vuelta', 'solo ida', 'destinos multiples'];
const passengersOptions = [1, 2, 3, 4, 5, '5 o mas'];
const classType = ['ECONOMY', 'PREMIUN ECONOMY', 'BUSINESS'];


function Form({optionsTrip}){
    return(
        <>
            <DropDown optionsTrip = {flightOptions} />
            <DropDown optionsTrip = {passengersOptions} />
            <DropDown optionsTrip = {classType} />

           
            
        </>
    )
}

export default Form