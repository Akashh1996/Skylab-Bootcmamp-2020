import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadHeroes from '../../redux/actions/hero-actions';

function HeroListComponents({ heroes }) {
  console.log(heroes);
  const [heroesList, setHeroesList] = useState(heroes);

  if (!heroesList) setHeroesList(loadHeroes());
  // debugger;
  return (
    <>
      {heroesList ? (
        <div>
          <h1>Heroes List</h1>
          <span>
            <input type="text" placeholder="Hello" />
            <button type="button">ADD</button>
            <button type="button">DEL</button>
            {/* <span>{heroesList[0].name}</span> */}
            {/* {heroesList.map((hero) => <span>{hero.name}</span>)} */}
          </span>
        </div>
      ) : (
        <div>Hola</div>
      )}
    </>
  );
}

HeroListComponents.propTypes = {
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

export default connect(mapStateToProps)(HeroListComponents);
