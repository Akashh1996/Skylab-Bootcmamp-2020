import React from 'react';
import PropTypes from 'prop-types';

function NotFound(props) {
	return (
		<>
			<h1>Page not Found</h1>
			<button type="button" onClick={() => props.history.push('/')}>
				Back to Dashboard
			</button>
		</>
	);
}

NotFound.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
};

export default NotFound;
