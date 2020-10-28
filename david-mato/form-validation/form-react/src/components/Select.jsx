import React from 'react';
import SelectOptions from './SelectOptions';

function Select({type, options}) {
	return (
		<div className="select-item">
			<label htmlFor={type}>{type}</label>
			<select name="viaje" id="viaje">
				{options.map((value) => <SelectOptions value={value}/> )}
			</select>
		</div>
    )
}

export default Select;