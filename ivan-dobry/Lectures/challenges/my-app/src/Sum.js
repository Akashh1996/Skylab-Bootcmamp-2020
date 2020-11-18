import React from 'react';

class Sum extends React.Component {
	componentWillMount() {
		console.info('wil mount');
	}

	componentDidMount() {
		console.info('didmount');
	}
	render() {
		console.info('render');
		return (
			<h1>
				{this.props.a} + {this.props.b} = {this.props.a + this.props.b}
			</h1>
		);
	}
}

export default Sum;
