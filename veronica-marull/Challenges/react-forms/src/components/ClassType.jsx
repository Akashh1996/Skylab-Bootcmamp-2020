import React, { useState } from 'react';

function ClassType() {
    const [classTypeValue, setClassTypeValue] = useState('economy');

    const  onClassTypeChange = (event => {
        setClassTypeValue(event.target.value);
    })

    return (
        <div>
            <label for="ClassType">Clase</label>

            <select name="ClassType" id="ClassType" value={classTypeValue} onChange={onClassTypeChange}>
                <option value="economy">ECONOMY</option>
                <option value="premiuneconomy">PREMIUN ECONOMY</option>
                <option value="business">BUSINESS</option>
            </select>
        </div>
    )
}

export default ClassType