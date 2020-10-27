// CONVERT A FUNCTION INTO A CLASS

import React from 'react';

/* 
function Sum(props) {
    return (
        <h1>
            {props.a} + {props.b} = {props.a + props.b}
        </h1>
    );
}
*/

class Sum extends React.Component {
	componentWillMount() {
		console.info('>>>>>>>>>>> will mount');
	}
	componentDidMount() {
		console.info('>>>>>>>>>> did mount');
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
