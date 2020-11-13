import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addHero, loadHero } from '../src/redux/actions/heroActions';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';

function HeroesList({ heroes, actions }) {
	debugger;
	const [newHero, setNewHero] = useState('');
	return ( 
		<>
			<input
				onChange={(event) => setNewHero(event.target.value)}
				value={newHero}
				placeholder="Enter new hero"
			></input>
			<button type="button" onClick={() => actions.addHero(newHero)}>
				Add
			</button>
			<ul className="heroes__list">		
				{
				heroes.map((hero) => (
					<li key={hero.name}>{hero.name}</li>
				))}
			</ul>
		</>
	);
}

HeroesList.propTypes = {
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
		actions: bindActionCreators({ addHero, loadHero }, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);
