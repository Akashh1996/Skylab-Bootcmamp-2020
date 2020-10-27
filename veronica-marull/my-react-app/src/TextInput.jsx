import React, { useState } from 'react';

function TextInput() {
    const [idValue, setIdValue] = useState('12');
    const [nameValue, setNameValue] = useState('Narco');
    const [hero, setHero] = useState({id: 12, name: 'Narco'});

    const onHeroChange = ({ target: { value}}, setValue, property)

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
                <inpt type="text" value={idValue} onChange={onIdChange}/>
            </p>
            <p>
                name: 
                <inpt type="text" value={nameValue} onChange={onNameChange}/>
            </p>
        </>
    )
}
    





export default TextInput
