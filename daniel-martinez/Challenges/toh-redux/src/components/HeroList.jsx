import React, { useState } from 'react';

import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addHero, getHeroes } from '../redux/actions/heroActions';

function HeroList({ heroes, actions }) {
	const [newHero, setNewHero] = useState('');

	return (
		<>
			<input
				onChange={(event) => setNewHero(event.target.value)}
				value={newHero}
				placeholder="Enter a new hero name"
			/>
			<button type="button" onClick={() => actions.addHero(newHero)}>
				Add
			</button>
			{(!heroes || !heroes.length) && (
				<>
					<h1>There are no heroes!</h1>
					<button type="button" onClick={() => actions.getHeroes()}>
						Update Heroes
					</button>
				</>
			)}
			{heroes &&
				heroes.length > 0 &&
				heroes.map((hero) => <li key={hero.id}>{hero.name}</li>)}
		</>
	);
}

HeroList.propTypes = {
	heroes: PropTypes.shape([]).isRequired,
	actions: PropTypes.shape({
		addHero: PropTypes.func.isRequired,
		getHeroes: PropTypes.func.isRequired
	}).isRequired
};

function mapStateToProps({ heroes }) {
	return {
		heroes
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ addHero, getHeroes }, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
