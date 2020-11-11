import React, { useState } from 'react';
import './HeroesList.css';
import ListElement from './ListElement';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { addHero } from '../redux/actions/heroActions';

function HeroesList({ heroes, actions }) {
	const [newHero, setNewHero] = useState('');
	return (
		<>
			<input
				placeholder="Enter new hero name"
				onChange={(event) => {
					setNewHero(event.target.value);
				}}
				value={newHero}
			/>
			<button
				type="button"
				onClick={() => {
					actions.addHero({ name: newHero });
					setNewHero('');
				}}
			>
				Add Hero
			</button>
			<div className="margin35"></div>
			<ul id="heroes-list">
				{heroes?.map((hero) => {
					return <ListElement hero={hero} />;
				})}
			</ul>
		</>
	);
}

HeroesList.propTypes = {
	heroes: PropTypes.shape([]).isRequired,
	globalId: PropTypes.number.isRequired,
	actions: PropTypes.shape({
		addHero: PropTypes.func.isRequired,
		incrementId: PropTypes.func.isRequired
	}).isRequired
};

function mapStateToProps({ heroReducer }) {
	return {
		heroes: heroReducer
	};
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators({ addHero }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);
