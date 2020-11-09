import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadHeroes, deleteHero, createHero } from '../actions/hero-actions';
import heroStore from '../stores/hero-store';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

function HeroList({ heroes, addHero }) {
	const [newHero, setNewHero] = useState('');

	return (
		<>
			<input
				onChange={(event) => setNewHero(event.target.value)}
				value={newHero}
				placeholder="Enter a new hero name"
			/>
			<button type="button" onClick={() => addHero(newHero)}>
				Add
			</button>
			{(!heroes || !heroes.length) && <h1>There are no heroes!</h1>}
			{heroes &&
				heroes.length > 0 &&
				heroes.map((hero) => <li key={hero}>{hero}</li>)}
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
	return {
		heroes
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ addHero, deleteHero }, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
