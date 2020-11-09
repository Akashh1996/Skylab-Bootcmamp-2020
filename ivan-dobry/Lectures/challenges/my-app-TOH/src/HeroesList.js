import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addHero } from './redux/actions/heroActions';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';

function HeroesList({ heroes, actions }) {
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
			<div className="heroes__list">
				{heroes.map((hero) => (
					<li key={hero}>{hero}</li>
				))}
			</div>
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
		actions: bindActionCreators({ addHero }, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);
