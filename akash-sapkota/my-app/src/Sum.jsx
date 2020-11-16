import React from 'react';
import PropTypes from 'prop-types';

/* function Sum(props) {
	return (
		<h1>
			{' '}
			{props.a}+ {props.b} = {props.a + props.b}{' '}
		</h1>
	);
} */
function Sum({ a, b }) {
	return (
		<h1>
			{a} + {b} ={' '}
			<button
				onClick={() => {
					alert(a + b);
				}}
			>
				{' '}
				{a + b}{' '}
			</button>
		</h1>
	);
}

/* class Sum extends React.Component {
	render() {
		console.log('render ............. ');
		return (
			<h1>
				{this.props.a} + {this.props.b} = {this.props.a + this.props.b}
			</h1>
		);
	}
	componentDidMount() {
		console.log(
			'did     ............ mount ? is mounted ? yes than console me'
		);
	}
	componentWillMount() {
		console.log('will .............. mount ? yes , than render');
	}
}
 */

/* class ClickCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { clicks: 0 };
	}
	render() {
		return (
			<div
				onClick={() => {
					this.setState({ clicks: this.state.clicks + 1 });
				}}
			>
				This div has been clicked {this.state.clicks} times
			</div>
		);
	}
} */

Sum.propTypes = {
	a: PropTypes.number.isRequired,
	b: PropTypes.number.isRequired
};

export default Sum;
