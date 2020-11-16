import React, {useState} from 'react';

function ConditionalDisplay(props) {
    const [isVisible, setIsVisible] = useState(props.isVisible);
    return (
    <div>
        <div>{isVisible ? props.children : React.createElement('h1', null, 'Haz clic en el botón...')}</div>
        <button
			onClick={() => {
				setIsVisible(!isVisible);
			}}
		>
			Toggle children
		</button>
    </div>
    )

    
}

export default ConditionalDisplay;