import React from 'react';
import Option from './Option';

function SelectInput({ optionValues }) {
	return (
		<select>
			{optionValues &&
				optionValues.map((element) => {
					return <Option options={element} />;
				})}
		</select>
	);
}

export default SelectInput;
