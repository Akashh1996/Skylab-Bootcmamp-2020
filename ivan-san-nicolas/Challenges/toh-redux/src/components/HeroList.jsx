import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addHero, loadHeroes, deleteHero } from '../redux/actions/heroActions';

function HeroList({heroes, actions}) {
  const [newHero, setNewHero] = useState('');

  return (
    <>
      <input
        onChange={(event) => setNewHero(event.target.value)}
        value={newHero}
        placeholder="Enter a new hero name"
      />
      <button type="button" onClick={() => actions.addHero(newHero)}>Add</button>

      {(!heroes || !heroes.length) && <h1>There are no heroes!</h1>}
      {heroes && heroes.length > 0 && heroes.map((hero) => (
        <>
          <li key={hero.name}>{hero.name}</li>
          <button type="button" onClick={() => actions.deleteHero(hero)}>X</button>
        </>
      ))}

      <button type="button" onClick={() => actions.loadHeroes()}>Load Heroes</button>

    </>
  );
}

HeroList.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    addHero: PropTypes.func.isRequired,
    loadHeroes: PropTypes.func.isRequired,
    deleteHero: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  debugger;
  return {
    heroes: state.heroesR.heroes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addHero, loadHeroes, deleteHero }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);