import React, { useState } from 'react';

function ConditionalDisplay(props) {
    const [isVisible, setIsVisible] = useState(props.isVisible);

    return (
        <div>
            <p>{isVisible ? props.children : React.createElement("h1", null, "Click...")}</p>
            <button 
                onClick={() => {
                    setIsVisible(!isVisible);
                }}
            >
                Toggle children
            </button>
        </div>
    );
}

export default ConditionalDisplay;