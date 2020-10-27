import React from 'react';
import store from './store';
import './PowerStatCircle.css';

class PowerStatCircle extends React.Component {
	componentDidMount() {
		console.log('aa');
		let circle = document.getElementById(this.props.powerstat[0]);
		store.setStrokeDashoffsetInCircle(circle, this.props.powerstat[1]);
		store.setStrokeDasharrayInCircle(circle, this.props.powerstat[1]);
	}
	render() {
		return (
			<div className="powerstats d-flex flex-column">
				<svg height="100" width="100">
					<circle cx="50" cy="50" r="37"></circle>
					<circle
						id={this.props.powerstat[0]}
						className="circle"
						cx="50"
						cy="50"
						r="37"
					></circle>
				</svg>
				<span className="powerstats__name text-capitalize">
					{this.props.powerstat[0]}
				</span>
				<span className="powerstats__number">{this.props.powerstat[1]}</span>
			</div>
		);
	}
}

export default PowerStatCircle;
