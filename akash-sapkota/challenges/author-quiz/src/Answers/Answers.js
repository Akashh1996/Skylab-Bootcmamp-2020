import React from 'react';

class Answers extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ul>
				<li>{this.props.options.options1}</li>
				<li>{this.props.options.options2}</li>
				<li>{this.props.options.options3}</li>
				<li>{this.props.options.options4}</li>
			</ul>
		);
	}
}

export default Answers;

/* let x = ["a", "b,", "c","d"]
<ul>
    {x.map(any)=> <li>{title}</li>)}
 */
