import React from 'react';
import Option from './Option';

function SelectInput(props) {
	const array = props.optionValues;
	return (
		<select>
			{array.map(function (element) {
				return <Option options={element} />;
			})}
		</select>
	);
}

export default SelectInput;
