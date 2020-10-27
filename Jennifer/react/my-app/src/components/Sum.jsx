import React from 'react';

class Sum extends React.Component {
	componentWillMount() {
		console.info('-------------will mount');
	}
	componentDidMount() {
		console.info('-------------did mount');
	}

	render() {
		console.log('render');
		return (
			<h1>
				{this.props.a} + {this.props.b} = {this.props.a + this.props.b}
			</h1>
		);
	}
}

export default Sum;
