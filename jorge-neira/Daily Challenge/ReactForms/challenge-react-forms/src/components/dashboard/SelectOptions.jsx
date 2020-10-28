import React from 'react';
import Option from './Option';
function SelectOption(props) {
	return (
		<>
			<select>
				{props.classType.map((element, index) => {
					return <Option option={element} id={index} />;
				})}
			</select>
			;
			<select>
				{props.flightOptions.map((element, index) => {
					return <Option option={element} id={index} />;
				})}
			</select>
			;
			<select>
				{props.passengers.map((element, index) => {
					return <Option option={element} id={index} />;
				})}
			</select>
			;
		</>
	);
}

export default SelectOption;
