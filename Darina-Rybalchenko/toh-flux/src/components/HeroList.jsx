import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { deleteHero, addHero } from './../redux/actions/hero-actions';
import './HeroList.css';

function HeroList({ heroes, actions }) {
	const [newHero, setNewHero] = useState('');

	return (
		<>
			<div>
				<input
					onChange={(event) => setNewHero(event.target.value)}
					value={newHero}
					placeholder="Enter a new hero name"
				/>
				<button
					className="add__button"
					type="button"
					onClick={() => actions.addHero(newHero)}
				>
					Add
				</button>
			</div>
			<div>
				{(!heroes || !heroes.length) && <h1>There are no heroes!</h1>}
				<ul>
					{heroes &&
						heroes.length > 0 &&
						heroes.map((hero) => (
							<li key={hero.id}>
								{hero.name || hero}{' '}
								<button type="submit" onClick={() => actions.deleteHero(hero)}>
									x
								</button>
							</li>
						))}
				</ul>
			</div>
		</>
	);
}

HeroList.propTypes = {
	heroes: PropTypes.shape([]).isRequired,
	actions: PropTypes.shape({ addHero: PropTypes.func.isRequired }).isRequired
};

function mapStateToProps({ heroes }) {
	return {
		heroes
	};
}
function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators({ deleteHero, addHero }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
