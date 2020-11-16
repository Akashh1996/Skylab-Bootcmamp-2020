import React, { useState } from 'react';

function To () {
    const [inputValue, setInputValue] = useState('Llegada a*');
    return(
        <> 
        <label htmlFor="llegada" for='llegada'></label>
       <input type="text" id='llegada' name="llegada" value={inputValue} onChange= {(event) => {
            setInputValue(event.target.value)
        }}/>
        </>
        
    )
}

export default To;