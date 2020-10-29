import React from 'react'

const optionValues =['Ida', 'Vuelta', 'Ida y Vuelta']

function DropDown({optionValues}){

    return(
        <select name="viaje" id="viaje" class="box-options">
            {optionValues.map(optionText=>{
                return <option>{optionText}</option>
            })}
        </select>
    )
}

export default DropDown