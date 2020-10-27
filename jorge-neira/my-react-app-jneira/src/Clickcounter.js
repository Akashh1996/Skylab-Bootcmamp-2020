import React from 'react';

class ClickCounter extends React.Component {
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
				This Div has been clicked {this.state.clicks}
			</div>
		);
	}
}

export default ClickCounter;
