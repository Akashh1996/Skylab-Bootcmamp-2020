import React, {useState} from 'react';

function Input({valueInput}) {

    const [value, setValue] = useState(valueInput);

    function handleChange(event) {
        setValue(event.target.value)
    }
    debugger

    return (
        <>
        <div className="column">
        <label for={value[0]}><i class="fas fa-plane-departure"></i></label>
        <input
            type="text"
            placeholder={value[1]}
            onChange = {(event) => handleChange(event)}
            title={value[2]}
            required
        />
        </div>
        </>
    )
}

export default Input