import React, { useState } from 'react';


function TextInput() {

    const [inputValue, setInputValue] = useState("react");
    const [id, setId] = useState('12');
    const [name, setName] = useState('Narco');

    function handleChange(event, setValue) {
        setValue(event.target.value);
    }

    return (
        <>
            <p>
                id:
                <input type="text" value={id} onChange={(event) => handleChange(event, setId)} />

                name:
                <input type="text" value={name} onChange={(event) => handleChange(event, setName)} />


                <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
            </p>
        </>
    )
}

export default TextInput;