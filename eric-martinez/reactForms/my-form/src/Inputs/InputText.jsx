import React, { useState } from 'react';

function InputText({label}) {

    const [text, setText] = useState(label)

    function handleChange(event, setValue) {
        setValue(event.target.value);
    }

    return (
        <>
            <input
                type="text"
                value={text}
                onChange={(event) => handleChange(event, setText)}

            />
        </>
    )
}

export default InputText;
