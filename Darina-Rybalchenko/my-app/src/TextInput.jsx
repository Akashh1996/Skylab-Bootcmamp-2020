import React, {useState} from 'react'

function TextInput() {
    const [idValue, setIdValue] = useState('12')
    const [nameValue, setNameValue] = useState('Narco')

    return (
        <>
        <p>
            id: 
        <input 
        type="text" 
        value={idValue}
        onChange={(event) => {
            setIdValue(event.target.value);
        }}
        />

        </p> 
        name: 
        <input 
        type="text" 
        value={nameValue}
        onChange={(event) => {
            setNameValue(event.target.value);
        }}
        />
        </>
    
   
    )
}

export default TextInput

