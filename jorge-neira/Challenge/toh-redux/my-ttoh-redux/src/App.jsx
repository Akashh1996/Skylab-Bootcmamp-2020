import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-type';
import { addHero, deleteHero } from './redux/actions/heroActions';
import './App.css';

function App({ heroes, actions }) {
	const [newHero, setNewHero] = useState('Narco');

	function addNewHero() {}

	return (
		<>
			<input
				type="text"
				placeholder="enter name"
				value={newHero}
				onChange={(event) => setNewHero(event.target.value)}
			/>
			<button
				onClick={() => {
					addNewHero();
				}}
			>
				Click Add
			</button>
		</>
	);
}

function mapStateTopProps(state) {
	return {
		heroes: state.heroes
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ addHero, deleteHero }, dispatch)
	};
}

HeroList.propTypes = {
	heroes: PropTypes.shape([]).isRequired,
	actions: PropTypes.shape({
		addHero: PropTypes.func.isRequired
	}).isRequired
};

export default connect(mapStateTopProps, mapDispatchToProps)(App);
