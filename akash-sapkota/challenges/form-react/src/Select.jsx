import React from "react"

function Select(options) {
    return (

        <select>
            {options.map((option) => {
                return <option value={option}> {option}</option>
            })}
        </select>

    )
}

export default Select