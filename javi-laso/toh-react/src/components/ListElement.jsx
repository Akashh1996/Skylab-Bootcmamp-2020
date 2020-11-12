import React from 'react';
import './ListElement.css';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { deleteHero } from '../redux/actions/heroActions';

function ListElement({ hero, actions }) {
	return (
		<li className="horizontal-heroes" key={hero.id}>
			<div className="hero-list-element">
				<span className="a-id">{hero.id}</span>
				<span>{hero.name}</span>
				<div className="flex1"></div>
				<button
					className="erase"
					onClick={() => {
						actions.deleteHero(hero);
					}}
				>
					X
				</button>
			</div>
		</li>
	);
}

ListElement.propTypes = {
	heroes: PropTypes.shape([]).isRequired,
	actions: PropTypes.shape({
		addHero: PropTypes.func.isRequired
	}).isRequired
};

function mapStateToProps() {
	return {};
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators({ deleteHero }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListElement);
