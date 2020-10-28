import React from 'react';
import Option from './Option';
function SelectOption(props) {
	return (
		<>
			<select>{console.log(props.classType)}</select>;
			<select>{console.log(props.flightOptions)}</select>;
			<select>{console.log(props.passengers)}</select>;
		</>
	);
}

export default SelectOption;
