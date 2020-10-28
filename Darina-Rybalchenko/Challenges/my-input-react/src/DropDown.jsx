import React from 'react';
import './DropDown.css';

function DropDown({ labelName, options }) {
	return (
		<>
			<label className="labelName">{labelName}</label>
			<select>
				{options.map((option) => {
					return <option key={option}>{option}</option>;
				})}
			</select>
		</>
	);
}

export default DropDown;
