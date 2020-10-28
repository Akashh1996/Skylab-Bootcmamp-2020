import React, { useState } from 'react';

function ConditionalDisplay(props) {
    const [isVisible, setIsVisible] = useState(props.isVisible);
    debugger

    return (
        <div>
            <p>{isVisible ? props.children : React.createElement('h1',null,'Clica en el botón...')}</p>
            <button
            onClick={() => {debugger; setIsVisible(!isVisible);
        }}>
        Toggle children
        </button>
        </div>
    )
}

export default ConditionalDisplay