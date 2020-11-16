import React from 'react';
import PropTypes from 'prop-types';

function Sum({a, b}) {
	return <h2>
		{a} + {b} = {a+b}
	</h2>
}

Sum.propTypes = {
	a: PropTypes.number.isRequired,
	b: PropTypes.number.isRequired,
}

// class Sum extends React.Component {
// 	componentWillMount() {
// 		console.log('>>>>> will mount');
// 	}
// 	componentDidMount() {
// 		console.log('>>>>> did mount');
// 	}
// 	render() {
// 		console.info('>>>>>>>>>>>>>>>>>>>>>>>>>render');
// 		return (
// 			<h1>
// 				{this.props.a} + {this.props.b} = {this.props.a + this.props.b}{' '}
// 			</h1>
// 		);
// 	}
// }

export default Sum;
