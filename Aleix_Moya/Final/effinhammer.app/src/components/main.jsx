import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { addWeapon, loadWeapons } from '../actions/SMActionCreator';

function WargearOfTheAstartes(weapons, actions, dispatch) {
	const [newWeapon, setNeoWeapon] = useState('');
	return (
		<>
			<input
				onChange={(event) => setNeoWeapon(event.target.value)}
				value={newWeapon}
				placeholder="Enter a new hero name"
			/>
			<button type="button" onClick={() => dispatch(actions.loadWeapons())}>
				LOAD
			</button>
			{console.log(weapons)}
			{(!weapons || !weapons.length) && <h1>There is no Data!</h1>}
			{weapons && weapons.length > 0 && (
				<ul>
					{weapons.map((weapon) => (
						<li key={weapons}>{weapon}</li>
					))}
				</ul>
			)}
		</>
	);
}
WargearOfTheAstartes.propTypes = {
	weapons: PropTypes.shape([]).isRequired,
	actions: PropTypes.shape({
		addWeapon: PropTypes.func.isRequired,
		loadWeapons: PropTypes.func.isRequired
	}).isRequired
};
function mapStateToProps(state) {
	return {
		weapons: state.weaponsReducer.weapons
	};
}
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ addWeapon, loadWeapons }, dispatch),
		dispatch
	};
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WargearOfTheAstartes);
