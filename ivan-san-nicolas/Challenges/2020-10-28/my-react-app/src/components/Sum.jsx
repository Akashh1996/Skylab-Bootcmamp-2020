import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a, b, showAlert, children }) {
	return (
		<div>
			<h1>
				{a} + {b} ={' '}
			</h1>
			<button
				onClick={() => {
					showAlert(a, b);
				}}
			>
				?
			</button>
		</div>
	);
}

Sum.propTypes = {
	a: PropTypes.number.isRequired,
	b: PropTypes.number.isRequired,
	showAlert: PropTypes.func.isRequired
};

export default Sum;
