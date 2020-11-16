import React from 'react';
import './inputItem.css';

function InputItem({ value, setValue, name }) {
    
    function handleChange({ target: { value } }, setValue) {
        setValue(value);
    }

    return (
        <div class="input-wrapper">
            <label>{name}</label>
            <input value={value} onChange={(event) => handleChange(event, setValue)} />
        </div>
    )
}

export default InputItem;