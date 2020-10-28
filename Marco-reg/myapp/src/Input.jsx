import React,{useState} from 'react'

function TextInput(){
    const[inputValue,setInputValue]=useState();
    return (
        <input
            type="value"
            value={inputValue}
            onChange={(e)=>{
                setInputValue(e.target.value);
                console.log(e.target.value);
            }}

        
        
        />
    )
}
export default TextInput;