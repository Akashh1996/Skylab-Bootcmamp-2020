import React, {useState} from "react";

function ConditionalDisplay(props) {
    const [isVisible, setIsVisible] = useState(props.isVisible);

    return(
        <div>
            <div>{isVisible 
            ? props.children 
            : React.createElement("h1", null, ["Clica en el botón", "kljaasassdk"])}</div>
            <button
                onClick= {() => {
                    setIsVisible(!isVisible);
                }}
            >
                Toggle Children

            </button>
        </div>
    );
}
export default ConditionalDisplay;