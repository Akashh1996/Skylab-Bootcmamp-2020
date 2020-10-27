import React, {useState} from 'react'

function TextInput () {
    const [iDValue, setIDValue] = useState('12');
    const [nameValue, setNameValue] = useState('Narco');
    const [hero, setHero] = useState({
        id: 12,
        name: 'Narco'
    });

    return (
        <>
        <p>
            id: 
    <input type='text' value={iDValue} onChange={(event) => {
        setIDValue(event.target.value);
        console.log(event.target.value)}}></input>
        </p>
        <p>
            name: 
            <input type="text" value={nameValue} onChange={(event) => {
                setNameValue(event.target.value);
            }}/>
        </p>
        </>
    )
}

export default TextInput