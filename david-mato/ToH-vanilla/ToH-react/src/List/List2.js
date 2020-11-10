import React, { useState } from 'react';
import { deleteHero, createHero } from '../actions/action-creators';
// import heroStores from '../stores/heroes-store';
import ListItem from './ListItem';
import '../style.css';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { addHero } from '../redux/actions/heroActions';

function List2({ heroes, actions }) {
	// const [heroes, setHeroes] = useState(heroStores.getHeroes());
	const [newHero, setNewHero] = useState();

	// useEffect(() => {
	// 	heroStores.addEventListener(handleChange);
	// 	if (!heroes || !heroes.length) {
	// 		loadHeroes();
	// 	}

	// 	return () => {
	// 		heroStores.removeEventListener(handleChange);
	// 	};
	// }, [heroes]);

	// function handleChange() {
	// 	setHeroes(heroStores.getHeroes());
	// }
	return (
		<main>
			<h2 class="list-title">My Heroes</h2>
			<input
				onChange={(event) => setNewHero(event.target.value)}
				value={newHero}
				placeholder="Enter a new hero name"
			/>
			<button onClick={() => actions.addHero(newHero)}>Add</button>
			{(!heroes || !heroes.length) && <h1>There are no heroes!</h1>}
			<div class="list-heroes">
				{heroes &&
					heroes.length > 0 &&
					heroes.map((hero) => (
						<>
							<ListItem heroID={hero.id} heroName={hero.name} />
							<button
								className="deleteButton"
								onClick={() => {
									deleteHero(hero.id);
								}}
							>
								X
							</button>
						</>
					))}
			</div>
		</main>
	);
}

List2.propTypes = {
	heroes: PropTypes.shape([]).isRequired,
	actions: PropTypes.shape({
		addHero: PropTypes.func.isRequired
	}).isRequired
};

function mapStateToProps() {
	return {
		heroes
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ addHero }, dispatch)
	};
}

// const mapDispatchToProps = {
// 	addHero
// }

export default connect(mapStateToProps, mapDispatchToProps)(List2);
