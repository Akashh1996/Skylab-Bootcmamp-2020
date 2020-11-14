import React, { useState } from 'react';
import { connect } from 'redux';
import { PropTypes } from 'prop-types';
import { loadHeroes } from '../redux/actions/actiontypes';

function HeroListComponents({heroes}) {
  const [heroes, setHeroes] = useState(null);

  return (
    <>

      {heroes ? (
        <div>
          <h1>Heroes List</h1>
          <span>
            <input type="text" />
            <button type="button">X</button>
          </span>
        </div>
      ) : <div>Hola</div>}
    </>
  );
}

HeroListComponents.propTypes={
    heroes: PropTypes.shape([]).isRequired,
    actions:PropTypes.shape({heroesList:PropTypes.func.isRequired}).isRequired
};

function mapStateToProps(state){
    return{
        heroesList:state.heroesList,
    };
}

export default connect(mapStateToProps)(HeroListComponents);
