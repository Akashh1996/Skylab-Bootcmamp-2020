import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import loadHeroes from '../../redux/actions/hero-actions';

function HeroListComponents({ heroes, actions }) {
  const [heroInput, setHeroInput] = useState('');

  // debugger;
  return (
    <>
      <div>
        <h1>Heroes List</h1>
        <span>
          <input type="text" placeholder="Hero Name" value={heroInput} onChange={(event) => setHeroInput(event.target.value)} />
          <button type="button">ADD</button>
          <button type="button">DEL</button>
        </span>
        <span onLoad={() => actions.loadHeroes()}>
          {(!heroes || !heroes.length) && <h2>No heroes availables!</h2>}
          {heroes && heroes.length > 0 && heroes.map((hero) => <li key={hero}>{hero}</li>)}
        </span>
      </div>
    </>
  );
}

HeroListComponents.propTypes = {
  loadHeroes: PropTypes.shape([]).isRequired,
  heroes: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    heroesList: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    heroes: state.heroesList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loadHeroes, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroListComponents);
