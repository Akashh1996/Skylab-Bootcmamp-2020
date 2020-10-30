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
