import React, {useState} from 'react';

function TextInput() {
    // const [isVisible, setIsVisible] = useState(props.isVisible);

    // return (
    //     <div>
    //         <p>{isVisible ? props.children : React.createElement("h1", null, "Click...")}</p>
    //         <button 
    //             onClick={() => {
    //                 setIsVisible(!isVisible);
    //             }}
    //         >
    //             Toggle children
    //         </button>
    //     </div>
    // );
    const [inputValue, setInputValue] = useState("react");
    const [nameValue, setNameValue] = useState("Narco");
    const [whatever, setwhatever] = useState("weqwe")
    function handleChange({target: {value}}, value) {
        setNameValue(value);
    }
    return (
        <>
        <p>
            id:
            <input 
            type="text" 
            value={inputValue}
            onChange={(e) => {
                setInputValue(e.target.value);
                console.log(e.target.value)}}
            />
        </p>
        <p>
            name: 
            <input
            type="text"
            value={nameValue}
            onChange={(e) => {
                setNameValue(e.target.value);
                console.log(e.target.value)}}
            />
        </p>

        <p>
            whatever:
            <input 
            type="text"
            value={whatever}
            onChange={(event) => handleChange(event, setId)}
            />
        </p>
        </>
    );
}

export default TextInput;