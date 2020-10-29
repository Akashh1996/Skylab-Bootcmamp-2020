import React from 'react';
import Option from './Option';
import Label from './Label';

function Select({ name, id, options }) {
	return (
		<div className="blocks">
			<Label text={name} />
			<select name={name} id={id} key={name}>
				{options.map((option) => (
					<Option option={option} key={option} />
				))}
			</select>
		</div>
	);
}

export default Select;
