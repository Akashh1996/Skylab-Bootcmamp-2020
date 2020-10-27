import React from 'react';
import './AuthorImage.css';

class AuthorImage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<img src={this.props.img}></img>
			</div>
		);
	}
}

export default AuthorImage;
