import React, { useState } from "react"
import Select from "./Select"

function Form() {
    const [passenger, setPassenger] = useState("1 passenger")

    const [inputOption, setOption] = useState("ida")
    /* 
        const inputOption = 'ida'
    
        function setOption(valor) {
            inputOption=valor
        }
     */
    debugger

    let options = [
        "idaa",
        "vuelta",
        "ida y vuelta"

    ]

    function handleChange({ target: { value } }, setvalue) {
        setvalue(value)
    }

    return (
        <div>
            <div>
                <label>Viaje</label>


                <select value={inputOption} onChange={(event) => handleChange(event, setOption)}>
                    {options.map((valor) => <option value={valor}>{valor}</option>)}
                </select>
            </div>
            <div>
                <label>Trip</label>
                <input type="text"
                    value={passenger}
                    onChange={(event) => handleChange(event, setPassenger)}
                />
            </div>





        </div >
    )
}

export default Form