import React, {useState} from 'react';

function DateInput() {
    const [date, setDate] = useState('');

    function handleChange({target: {value}}, setValue) {
        setValue(value);
    }

    return (
        <div>
            <input
                type="date"
                placeholder="Fecha de viaje *"
                value={date}
                required
                min="2020-10-08"
                onChange={(event) => handleChange(event, setDate)}
            />
        </div>
    )
}

export default DateInput;