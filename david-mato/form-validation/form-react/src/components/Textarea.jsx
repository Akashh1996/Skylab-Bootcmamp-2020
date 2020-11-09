import React, {useState} from 'react';

function Textarea() {
    const [description, setDescription] = useState('');

    function handleChange({target: {value}}, setValue) {
        setValue(value);
    }

    return (
        <div>
            <textarea
                id="description"
                name="description"
                cols="30"
                rows="10"
                placeholder="Descripción"
                value={description}
                onChange={(event) => handleChange(event, setDescription)}
            ></textarea>
        </div>
    )
}

export default Textarea;