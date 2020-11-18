import React from "react"

function Pasajeros({dropdownOptionsTravelers}) {
    return (
    
    <>
    <p id="people">
        Pasajeros
        <select>
        {dropdownOptionsTravelers.map(currentOption => {
            return <option>{currentOption}</option>
        })}
        </select>
        </p>
    </>
    );
}

export default Pasajeros;