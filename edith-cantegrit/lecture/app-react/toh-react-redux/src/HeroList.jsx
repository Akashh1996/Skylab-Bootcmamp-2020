import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionsCreators } from 'redux';

import { addHero } from '../redux/actions/heroActions';

function HeroList({ heroes }) {
	const [newHero, setNewHero] = useState('');

	return (
		<>
			<input
				placeholder="Enter your heroname"
				onChange={(event) => setNewHero(event.target.value)}
				value={newHero}
			></input>
			<button type="button" onClick={() => actions.addHero(newHero)}></button>
		</>
	);
}

HeroList.propTypes = {
	heroes: PropTypes.shape([]).isRequired,
	actions: PropTypes.shape({
		addHero: PropTypes.func.inRequired
	}).isRequired
};

function mapStateToProps({ heroes }) {
	return {
		heroes
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionsCreators({ addHero }, dispatch)
	};
}
export default connect(mapStateToProps)(HeroList);
