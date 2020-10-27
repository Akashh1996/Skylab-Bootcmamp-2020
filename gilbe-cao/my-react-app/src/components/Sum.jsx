import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a, b, showAlert }) {
	return (
		<>
			{a} + {b} ={' '}
			<button
				onClick={() => {
					showAlert(a, b);
				}}
			>
				?
			</button>
		</>
	);
}

Sum.propTypes = {
	a: PropTypes.number.isRequired,
	b: PropTypes.number.isRequired,
	showAlert: PropTypes.func.isRequired
};

/*
class Sum extends React.Component {
	componentWillMount() {
		console.info('>>>>>>>>will mount    ');
	}
	componentDidMount() {
		console.info('>>>>>>>>did mount    ');
	}
	render() {
		console.info('>>>>>>>>rendear');
		return (
			<h1>
				{this.props.a} + {this.props.b} = {this.props.a + this.props.b}
			</h1>
		);
	}
}
*/
export default Sum;
