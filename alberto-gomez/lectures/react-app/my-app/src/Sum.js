// CONVERT A FUNCTION INTO A CLASS

import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a, b }) {
	return (
		<h1>
			{{ a }} + {{ b }} ={' '}
			<button onClick={() => alert(`El resultado es ${a + b}`)}>?</button>
		</h1>
	);
}

/* class Sum extends React.Component {
	componentWillMount() {
		console.info('>>>>>>>>>>> will mount');
	}
	componentDidMount() {
		console.info('>>>>>>>>>> did mount');
	}
	render({ a, b }) {
		console.info('render');
		return (
			<h1>
				{{ a }} + {{ b }} ={' '}
				<button onClick={() => alert(`El resultado es ${a + b}`)}>?</button>
			</h1>
		);
	}
} */

Sum.propTypes = {
	a: PropTypes.number.isRequired,
	b: PropTypes.number.isRequired
};

export default Sum;
