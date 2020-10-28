import React, {useState} from 'react';
import './inputDiv.css';
import InputItem from './input-item/InputItem';

function InputDiv() {

    const originTitle = 'Origen';
    const [origin, setOrigin] = useState('Salida de *');
    const destinyTitle = 'Destino';
    const [destiny, setDestiny] = useState('Llegada a *');    

    return (
        <div class="row">
            <InputItem value={origin} setValue={setOrigin} name={originTitle}/>
            <InputItem value={destiny} setValue={setDestiny} name={destinyTitle}/>
        </div>
    )
    
}

export default InputDiv;