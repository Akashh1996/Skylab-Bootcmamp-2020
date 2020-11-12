import React, { useState } from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types'
import { bindActionCreators } from 'redux';
import {addHero, deleteHero, changeHero, getHeroes} from '../redux/actions/heroActions'

function HeroList({heroes, dispatch}) {
  const [newHero, setNewHero] = useState('');
  const [newName, setNewName] = useState('');
  const [Id, setId] = useState('');

  if (!heroes || !heroes?.length) {
		dispatch(getHeroes());
	}

  return (
    <>
      <input
        onChange={(event) => setNewHero(event.target.value)}
        value={newHero}
        placeholder="Enter a new hero"
      />
      <button type="button" onClick={() => dispatch(addHero(newHero, heroes))}>Add</button>
      
      {(!heroes || !heroes.length) && <h1>There are no heroes!</h1>}

      <ul> 
       {heroes && heroes.length > 0 && heroes.map((one_hero) =>
        <><li><span key={one_hero.id}>
        {`Id: ${one_hero.id} - ${one_hero.name}`}
      </span><button value={one_hero.id} type="button" onClick={() => dispatch(deleteHero(one_hero.id))}>x</button></li></>
       )}
      </ul>

    <legend>Change hero name by Id:</legend>
    <label for="id">Id:</label>
    <input id="id" onChange={(event) => setId(event.target.value)} value={Id}/>
    <label for="name">Name:</label>
    <input id="name" onChange={(event) => setNewName(event.target.value)} value={newName}/>
    <button type="button" onClick={() => dispatch(changeHero(Id, newName))}>Send</button></>
  
  );
}

HeroList.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    addHero: PropTypes.func.isRequired,
    deleteHero: PropTypes.func.isRequired,
    getHeroes: PropTypes.func.isRequired
  }).isRequired
}

function mapStateToProps({heroes}) {
  return {
    heroes: heroes.list
  }
}

function mapDispatchToProps(dispatch) {
  return{
    actions: bindActionCreators({addHero, deleteHero, changeHero, getHeroes}, dispatch),
    dispatch
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeroList);