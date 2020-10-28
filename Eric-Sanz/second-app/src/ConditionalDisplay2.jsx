import React, {useState} from 'react';

function ConditionalDisplay2(props) {
    const [isVisible, setIsVisible] = useState(props.isVisible);

    return (
        <div>
            <p>
                {isVisible ? props.children : React.createElement('h2', null, '"Ahora no me ves!"')}
            </p>
            <button onClick={() => {
                setIsVisible(!isVisible);
            }}
            >
                Toggle Children 2
            </button>
        </div>
    );
}

export default ConditionalDisplay2;
export const x = true;
export const w = false;