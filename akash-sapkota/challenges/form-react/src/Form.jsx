import React, { useState } from "react"
import Select from "./Select"

function Form() {
    let myObj = {
        name: "akash",
        age: 35
    }

    return (
        <div>
            <Select name={myObj.name} surname={myObj.age}>
                <h1>hello</h1>
            </Select>
        </div>
    )
}

export default Form

/*
<div>
            <div>
                <label>Viaje</label>
                <Select />
            </div>
            <div>
                <label>Trip</label>
                <input type="text"
                    value={passenger}
                    onChange={(event) => handleChange(event, setPassenger)}
                />
            </div>

</div > */

/*
    function handleChange({ target: { value } }, setvalue) {
            setvalue(value)
    }
*/

/* const [passenger, setPassenger] = useState("1 passenger")
    let options = [
        "idaa",
        "vuelta",
        "ida y vuelta"

    ] */