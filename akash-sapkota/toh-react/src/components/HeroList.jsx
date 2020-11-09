import React, { useEffect, useState } from 'react';
import { connect } from "react-redux"
import { PropTypes } from "prop-types"
import { bindActionCreators } from 'redux';
import { addHero } from "../redux/actions/heroActions"

function HeroList({ heroes, actions }) {
  debugger
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
        <li key={hero}>{hero}</li>
      ))}
    </>
  );
}

/* function mapStateToProps(state) {
  return {
    heroes: state.heroes,

  }   --hacer destructing
} */

HeroList.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    addHero: PropTypes.func.isRequired,
  }).isRequired

}

function mapStateToProps({ heroes }) {
  return {
    heroes,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addHero }, dispatch)
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
