import React, { useState } from "react"

function ConditionalDisplay(props) {
    const [isVisible, setIsVisible] = useState(props.isVisible)
    console.log(useState(props.isVisible));
/*     console.log(props);
 */    return <div>
        <div> {isVisible ? props.children : React.createElement("h1", null, "clica en el button")}</div>
        <button
            onClick={() => {
                setIsVisible(!isVisible)
            }}
        >
            Toogle Children
        </button>
    </div>
}

export default ConditionalDisplay