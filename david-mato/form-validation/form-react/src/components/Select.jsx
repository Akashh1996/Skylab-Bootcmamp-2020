import React from 'react';
import SelectOptions from './SelectOptions';

function Select({type, options}) {

    function handleChange({target: {value}}, setValue) {
        setValue(value);
	}
	
    return (
		<div className="select-item">
			<label htmlFor={type}>{type}</label>
			<select name="viaje" id="viaje" value={type} onChange={(event) => handleChange(event, type)}>
				{options.map((value) => <SelectOptions value={value}/> )}
			</select>
		</div>
    )
}

export default Select;