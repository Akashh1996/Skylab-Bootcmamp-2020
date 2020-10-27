import React, { useState } from 'react';

function TextInput(){
    const [inputId, setInputId] = useState("12");
    const [inputName, setInputName] = useState("react");
    
    function handleChanges({ target :{ value }}, setValue){
        setValue(value);
    }

    return (
        <>
        <p> id: 
        <input type="text" value={inputId} onChange={(event) => handleChanges(event, setInputId)}/>
        </p>
        <p> name: 
        <input type="text" value={inputName} onChange={(event) => handleChanges(event, setInputName)}>
            </input>
        </p>
        </>
    );
}

export default TextInput;