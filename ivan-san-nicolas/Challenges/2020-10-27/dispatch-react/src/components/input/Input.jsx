import React, {useState} from 'react';

function Input() {

    const [inputValue, setInputValue] = useState('React');

    return (
        <>
        <input type="text" value={inputValue} onChange={
            (e) => setInputValue(e.target.value)
        } />
        <input type="text" value={inputValue} onChange={
            (e) => setInputValue(e.target.value)
        } />
            
        </>
        
    )
}

export default Input;