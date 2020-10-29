import React, { useState } from 'react';

function From () {
    const [inputValue, setInputValue] = useState('Salida de*');
    return(
        <> 
        <label htmlFor="salida" for='salida'></label>
       <input type="text" id='salida' name="salida" value={inputValue} onChange= {(event) => {
            setInputValue(event.target.value)
        }}/>
        </>
        
    )
}

export default From;