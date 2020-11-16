import React, {useState} from 'react';

function EmailInput() {
    const [email, setEmail] = useState('');

    function handleChange({target: {value}}, setValue) {
        setValue(value);
    }

    return (
        <div>
            <input
                type="email"
                placeholder="Email *"
                required
                pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={email}
                onChange={(event) => handleChange(event, setEmail)}
            />
        </div>
    )
}

export default EmailInput;