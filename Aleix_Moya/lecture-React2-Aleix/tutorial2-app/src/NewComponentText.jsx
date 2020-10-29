import React, {useState} from 'react';

function NewComponentText(props){
    const[inputValue, setInputValue] = useState('12');
    const[inputValue2, setInputValue2] = useState('Narco');
    
    return (
        <>
            <p>
                id:
                <input 
                    type = "text" 
                    value = {inputValue} 
                    onChange = {(e) =>{
                        setInputValue(e.target.value)
                }}/>
            </p>,
            <p>
                name:
                <input 
                    type = "text"
                    value = {inputValue2}
                    onChange = {(e) => {
                        setInputValue2(e.target.value)
                    }}
                />

            </p>
        </>
    );
}


export default NewComponentText;