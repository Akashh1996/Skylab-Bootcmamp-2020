import React, { useState } from 'react';
import ListItem from './ListItem';
import '../style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteHero, addHero } from '../redux/actions/heroActions';
import {PropTypes} from 'prop-types'

function List2({ heroes, actions }) {
	const [newHero, setNewHero] = useState();

	return (
		<main>
			<h2 class="list-title">My Heroes</h2>
			<input
				onChange={(event) => setNewHero(event.target.value)}
				value={newHero}
				placeholder="Enter a new hero name"
			/>
			<button onClick={() => {actions.addHero(newHero); setNewHero('')}}>Add</button>
			{(!heroes || !heroes.length) && <h1>There are no heroes!</h1>}
			<div class="list-heroes">
				{heroes &&
					heroes.length > 0 &&
					heroes.map((hero) => (
						<>
							<ListItem heroID={hero.id} heroName={hero.name} />
							<button
								className="deleteButton"
								onClick={() => actions.deleteHero(hero.id)}
							>
								X
							</button>
						</>
					))}
			</div>
		</main>
	);
}

function mapStateToProps({heroes}) {
	return {
		heroes
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ deleteHero, addHero }, dispatch)
	};
}

List2.propTypes = {
	heroes: PropTypes.shape([]).isRequired,
	actions: PropTypes.shape({
		deleteHero: PropTypes.func.isRequired,
		addHero: PropTypes.func.isRequired
	}).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(List2);
