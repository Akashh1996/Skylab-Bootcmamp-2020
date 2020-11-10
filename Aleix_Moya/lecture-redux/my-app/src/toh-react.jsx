import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { addHero } from './redux/actions/heroActions';
import { meanwhile, loadCoin, errorCoins } from './redux/actions/heroActions';

function HeroList({ heroes, actions }) {
	const [newHero, setNewHero] = useState('');

	return (
		<>
			<input
				onChange={(event) => setNewHero(event.target.value)}
				value={newHero}
				placeholder="Enter a new hero name"
			/>
			<button type="button" onClick={() => actions.addHero(newHero)}>
				Add
			</button>

			{(!heroes || !heroes.length) && <h1>There are no heroes!</h1>}
			{heroes &&
				heroes.length > 0 &&
				heroes.map((hero) => <li key={hero}>{hero}</li>)}
		</>
	);
}
function fetchProducts() {
	let products;
	return (dispatch) => {
		dispatch(meanwhile());
		fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
			.then((res) => res.json())
			.then((res) => {
				if (res.error) {
					console.log('erreeeeeor');
					throw res.error;
				}
				dispatch(loadCoin(res.products));
				products = res.products;
				console.log(products);
				return res.products;
			})
			.catch((error) => {
				dispatch(errorCoins(error));
			});
	};
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
		actions: bindActionCreators({ addHero }, dispatch)
	};
}
export default fetchProducts;
//export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
