import React, { useState } from 'react';
import './HeroesList.css';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import ListElement from './ListElement';
import { addHero } from '../redux/actions/heroActions';

function HeroesList({ heroes, actions }) {
  const [newHero, setNewHero] = useState('');
  return (
    <>
      <input
        placeholder="Enter new hero name"
        onChange={(event) => { setNewHero(event.target.value); }}
        value={newHero}
      />
      <button
        type="button"
        onClick={() => { actions.addHero({ name: newHero }); setNewHero(''); }}
      >
        Add Hero
      </button>
      <div className="margin35" />
      <ul id="heroes-list">
        {heroes?.map((hero) => <ListElement hero={hero} />)}
      </ul>
    </>
  );
}

HeroesList.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    addHero: PropTypes.func.isRequired,
    incrementId: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ heroesReducer }) {
  return {
    heroes: heroesReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ addHero }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);
