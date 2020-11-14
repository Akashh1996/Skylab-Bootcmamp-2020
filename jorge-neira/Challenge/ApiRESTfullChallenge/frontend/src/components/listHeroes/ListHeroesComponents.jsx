import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import loadHeroes from '../../redux/actions/hero-actions';

function HeroListComponents({ heroes, actions }) {
  debugger;
  const [heroInput, setHeroInput] = useState('');

  return (
    <>
      <div>
        <h1>Heroes List</h1>
        <span>
          <input type="text" placeholder="Hero Name" value={heroInput} onChange={(event) => setHeroInput(event.target.value)} />
          <button type="button">ADD</button>
          <button type="button">DEL</button>
        </span>
        <span>
          <button type="button" onClick={() => actions.loadHeroes()}>Load</button>
          {/* {(!heroes || !heroes.length) && (
          <div>
            <h2>No heroes availables!</h2>
          </div>
          ) }
          {heroes && heroes.length > 0 && heroes.map((hero) => <li key={hero}>{hero.name}</li>)} */}
        </span>
      </div>
    </>
  );
}

HeroListComponents.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    loadHeroes: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ heroReducer }) {
  debugger;
  return {
    heroes: heroReducer,
  };
}

function mapDispatchToProps(dispatch) {
  debugger;
  return {
    actions: bindActionCreators(loadHeroes, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroListComponents);
