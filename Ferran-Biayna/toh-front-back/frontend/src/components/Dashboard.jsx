import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types'
import { bindActionCreators } from 'redux';
import {addHero, getHeroes} from '../redux/actions/heroActions'

function Dashboard({heroes, dispatch}) {

  if (!heroes) {
		dispatch(getHeroes());

  return (
    <>
      {!heroes.length && <h1>There are no heroes!</h1>}
      {
        heroes.length && <ul>{heroes.slice(0,4).map((hero) => <li key={hero.id}><Link to={`/heroes/${hero.id}`}>{hero.name}</Link></li>)}</ul>
      }
    </>
  );
}

Dashboard.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    addHero: PropTypes.func.isRequired,
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
    actions: bindActionCreators({addHero, getHeroes}, dispatch),
    dispatch
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
