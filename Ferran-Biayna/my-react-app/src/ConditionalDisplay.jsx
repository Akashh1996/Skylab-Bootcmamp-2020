import React, { useState } from 'react';

function ConditionalDisplay({isVisible, children}) {
    const [isVisible, setIsVisible] = useState(props.isVisible);
    const test = useState(props.isVisible)
    const a = test[0]
    const b = test[1]
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