import React, { useState } from 'react'

function ConditionaDisplay(props) {
    const [isVisible, setIsVisible] = useState(props.isVisible)

    return (
        <div>
            <p>{isVisible
             ? props.children 
             : React.createElement('h1', null, 'Clica en el boton...')}
             </p>
            <button
                onClick={ () =>  {
                setIsVisible(!isVisible)
                }}
            >Toggle children
            </button>
        </div>
    )
}

export default ConditionaDisplay