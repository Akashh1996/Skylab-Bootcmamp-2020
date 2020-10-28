import React from 'react';

function Option({ option, id }) {
	return <option key={id}>{option}</option>;
}
export default Option;
