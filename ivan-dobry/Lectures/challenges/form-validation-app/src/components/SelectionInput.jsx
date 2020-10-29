import React from 'react'

function SelectionInput () {
    return (
        <>
        <label htmlFor="Viaje">Viaje</label>
    <select name="Viaje" id="Viaje">
        <option value="Ida y Vuelta">Ida y Vuelta</option>
        <option value="Ida">Ida</option>
        <option value="Vuelta">Vuelta</option>
    </select>
    </>
    )
}

export default SelectionInput;