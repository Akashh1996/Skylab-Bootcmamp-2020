import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteHero, createHero } from '../actions/hero-actions';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import addHero from '../redux/actions/heroActions';

function HeroList({ heroes, addHero }) {
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

			{(!heroes || !heroes.length) && <h1>There are no heroes!</h1>}
			{heroes &&
				heroes.length > 0 &&
				heroes.map((hero) => <li key={hero.id}> {hero}</li>)}
		</>
	);
}

HeroList.propTypes = {
	heroes: PropTypes.shape([]).isRequired,
	actions: PropTypes.shape({
		addHero: PropTypes.func.isRequired
	}).isRequired
};

function mapStateToProps({ heroes }) {
	//destructurim porque solo utilizo heroes del store
	return {
		heroes //la prop con el mismo nombre qeu el valor
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ addHero }, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
