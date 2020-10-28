import React from 'react';

function DropDown({ options }) {
	return (
		<>
			<select>
				{options &&
					options.map((currentOption) => {
						return <option>{currentOption}</option>;
					})}
			</select>
		</>
	);
}

export default DropDown;
