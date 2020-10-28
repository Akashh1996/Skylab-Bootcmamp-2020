import React from 'react';

function DropDown({ options }) {
	return (
		<select>
			{options.map((option) => {
				return <option>{option}</option>;
			})}
		</select>
	);
}

export default DropDown;
