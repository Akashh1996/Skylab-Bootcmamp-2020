import React, { useState } from 'react';

function TextInput() {
    const [idValue, setIdValue] = useState('12');
    const [nameValue, setNameValue] = useState('Narco');
    //const [hero, setHero] = useState({id: 12, name: 'Narco'});

    

    const  onIdChange = (event => {
        setIdValue(event.target.value);
    })

    const  onNameChange = (event => {
        setNameValue(event.target.value);
    })

    return (
        <>
            <p>
                id: 
                <input type="text" value={idValue} onChange={onIdChange}/>
            </p>
            <p>
                name: 
                <input type="text" value={nameValue} onChange={onNameChange}/>
            </p>
        </>
    )
}
    





export default TextInput
