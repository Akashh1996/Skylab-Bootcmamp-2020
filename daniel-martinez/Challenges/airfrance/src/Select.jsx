import React from 'react';
import Option from './Option';
import Label from './Label';

function Select({ name, id, options }) {
	return (
		<div className="blocks">
			<Label text={name} />
			<select name={name} id={id}>
				{options.map((option) => (
					<Option option={option} />
				))}
			</select>
		</div>
	);
}

export default Select;
