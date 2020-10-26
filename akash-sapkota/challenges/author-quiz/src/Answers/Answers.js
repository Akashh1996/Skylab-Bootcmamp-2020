import { func } from 'prop-types';
import React from 'react';
import './Answers.css';

const books = [
	'The Shining',
	'The Adventures of Huckleberry Finn',
	'Macbeth',
	'IT'
];

class Answers extends React.Component {
	render() {
		return (
			<div>
				<ul>
					{books.map((title) => {
						return (
							<li
								onClick={function click() {
									let main = document.getElementById('main');
									if (title === 'The Shining') {
										main.style.background = 'green';
									} else {
										main.style.background = 'red';
									}
								}}
							>
								{title}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Answers;
