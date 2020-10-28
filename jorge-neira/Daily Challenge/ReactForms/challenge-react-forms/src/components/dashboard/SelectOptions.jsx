import React from 'react';
import Option from './Option';
function SelectOption(props) {
	return (
		<>
			<select>
				{props.classType.map((element) => {
					return <Option option={element} />;
				})}
			</select>
			;
			<select>
				{props.flightOptions.map((element) => {
					return <Option option={element} />;
				})}
			</select>
			;
			<select>
				{props.passengers.map((element) => {
					return <Option option={element} />;
				})}
			</select>
			;
		</>
	);
}

export default SelectOption;
