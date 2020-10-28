import React, {useState} from "react"

function Input() {
    const [id, setId] = useState(1212);
    const [name, setName] = useState("Narco");
    const [lastName, setLastName] = useState("traficante");

    function handleChange(event, setValue) {
        setValue(event.target.value)
    }

    return (
    <>
        <p>
            id:
            <input type='text' value={id} onChange={(event) => handleChange(event, setId)}/>
        </p>
        <p>
            name:
            <input type='text' value={name} onChange={(event) => handleChange(event, setName)}/>
        </p>
        <p>
            last name:
            <input type='text' value={lastName} onChange={(event) => handleChange(event, setLastName)}/>
        </p>


    </>
    );
}

export default Input;