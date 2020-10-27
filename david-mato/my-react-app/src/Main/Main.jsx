import React from 'react';
import AuthorOptions from './AuthorOptions';
import './Main.css';

class Main extends React.Component {
	render() {
        const books = [
            'The Shining',
            'The Adventures of Huckleberry Finn',
            'Macbeth',
            'IT'
        ]

        return (
            <main>
                <article id='author-and-options'>
                    <img class="author-photo" src={this.props.image} alt=''/>
                    <AuthorOptions books={books}/>
                </article>
                <button id="continue-button">Continue</button>
            </main>
        )
	}
}

export default Main;