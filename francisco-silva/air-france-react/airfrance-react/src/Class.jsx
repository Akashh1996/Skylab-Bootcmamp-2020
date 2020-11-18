import React from "react"

function Class({dropdownOptionsClass}) {
    return (
    
    <>
    <p id="class">
        Clase
        <select>
        {dropdownOptionsClass.map(currentOption => {
            return <option>{currentOption}</option>
        })}
        </select>
        </p>
    </>
    );
}

export default Class;