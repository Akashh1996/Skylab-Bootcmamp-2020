import React from "react"

function SelectTrip({dropdownOptionsTrip}) {
    return (
    
    <>
    <p id="trip">
        Viaje
        <select>
        {dropdownOptionsTrip.map(currentOption => {
            return <option>{currentOption}</option>
        })}
        </select>
        </p>
    </>
    );
}

export default SelectTrip;