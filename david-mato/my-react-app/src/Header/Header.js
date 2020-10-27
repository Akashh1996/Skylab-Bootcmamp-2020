import React from 'react';
import './Header.css'

class Header extends React.Component {
	render() {
    return (
        <header>
            <h1 class="quiz-title">{this.props.title}</h1>
            <p class="instructions">{this.props.instructions}</p>
        </header>);
	}
}

export default Header;
