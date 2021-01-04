import React,{useState} from 'react';


function TextInput(){
    const [inputValue,setInputValue] = useState('react');

    return (
        <input 
            type="text" 
            value={inputValue} 
            onChange={(e)=>{
                setInputValue(e.target.value);
                console.log(e.target.value)
            }}
        />)

}

export default TextInput;