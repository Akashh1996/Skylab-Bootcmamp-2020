import React, {useState} from 'react';

function ConditionalDisplay(props) {
    const [isVisible, setIsVisible] = useState(props.isVisible);

    return (
        <div>
            {isVisible ? props.children : React.createElement('h1', null, 'Adiós')}
            {/* {isVisible ? props.children : null} */}
            <button
                onClick={() => {
                    setIsVisible(!isVisible)
                }}>
                    Toggle children
            </button>
        </div>
    )
}

export default ConditionalDisplay;