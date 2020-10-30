import React, { useState } from 'react';

function RegularInput () {
    const [inputValue, setInputValue] = useState('1 Pasajero');
    return(
        <> 
        <label htmlFor="pasajeros" for='pasajeros'></label>
       <input type="text" id='pasajeros' name="pasajeros" value={inputValue} onChange= {(event) => {
            setInputValue(event.target.value)
        }}/>
        </>
        
    )
}

export default RegularInput;