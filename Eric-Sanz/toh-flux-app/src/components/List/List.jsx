import React, { useState } from 'react';
// import ListItem from './ListItem';
// import { loadHeroes } from '../../actions/hero-actions';
// import storeHeroes from '../../stores/hero-store';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { addHero, loadHeroes } from '../../redux/actions/hero-actions';
import { connect } from 'react-redux';
import '../../TohStyles.css';

function List({ heroes, actions }) {
	// const [heroes, setHeroes] = useState(storeHeroes.getHeroes());
	const [newHero, setNewHero] = useState('');

	// const addHero = (newHero) => {};

	return (
		<main>
			<input
				placeholder="Enter new Hero"
				onChange={(event) => setNewHero(event.target.value)}
				value={newHero}
			></input>
			<button type="button" onClick={() => actions.addHero(newHero)}>
				Add
			</button>
			<h2 className="list-title">My Heroes</h2>
			<div className="list-heroes">
				{heroes &&
					heroes.length > 0 &&
					heroes.map((hero) => (
						<li key={hero.name}>{hero.name}</li>
						// <ListItem heroId={hero.id} heroName={hero.name} />
					))}
			</div>
		</main>
	);
}

List.propTypes = {
	heroes: PropTypes.shape([]).isRequired,
	actions: PropTypes.shape({
		addHero: PropTypes.func.isRequired,
		loadHeroes: PropTypes.func.isRequired
	}).isRequired
};

function mapStateToProps({ heroes }) {
	return {
		heroes
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ addHero, loadHeroes }, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
