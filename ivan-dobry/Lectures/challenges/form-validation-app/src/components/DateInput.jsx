import React, { useState } from 'react';

function DateInput () {
    const [inputValue, setInputValue] = useState('Fechas de viaje');
    return(
        <> 
        <label htmlFor="date" for='date' ></label>
       <input type="date" id='date' name="date" value={inputValue} onChange= {(event) => {
            setInputValue(event.target.value)
        }}/>
        </>
        
    )
}

export default DateInput;