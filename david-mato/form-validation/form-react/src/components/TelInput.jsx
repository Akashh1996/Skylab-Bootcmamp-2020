import React, {useState} from 'react';

function TellInput() {
    const [telNumber, setTelNumber] = useState('');

    function handleChange({target: {value}}, setValue) {
        setValue(value);
    }

    return (
        <div>
            <input
                type="tel"
                placeholder="Número de teléfono *"
                required
                pattern="[0-9]{9}"
                maxLength="9"
                value={telNumber}
                onChange={(event) => handleChange(event, setTelNumber)}
            />
        </div>
    )
}

export default TellInput;