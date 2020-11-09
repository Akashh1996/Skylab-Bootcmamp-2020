import React from 'react';

function SwitchInput() {
    return (
        <div>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            <span>Viaje profesional</span>
        </div>
    )
}

export default SwitchInput;