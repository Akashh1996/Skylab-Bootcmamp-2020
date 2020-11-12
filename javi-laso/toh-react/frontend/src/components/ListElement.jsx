import React from 'react';
import './ListElement.css';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { Link } from 'react-dom';
import { deleteHero } from '../redux/actions/heroActions';

function ListElement({ hero, actions }) {
  return (
    <li className="horizontal-heroes" key={hero.id}>
      <Link to={`/${hero.id}`} className="hero-list-element">
        <span className="a-id">{hero.id}</span>
        <span>{hero.name}</span>
        <div className="flex1" />
        <button
          type="button"
          className="erase"
          onClick={() => { actions.deleteHero(hero.id); }}
        >
          X
        </button>
      </Link>
    </li>
  );
}

ListElement.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    addHero: PropTypes.func.isRequired,
    deleteHero: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ deleteHero }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListElement);
