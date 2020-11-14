import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestHeroes } from '../../redux/actions/heroAction';
import { Link } from 'react-router-dom';
import './HeroList.css';



function HeroList({ pokemonList, dispatch, props }) {
    
    if (!pokemonList && !pokemonList?.length) {
        dispatch(requestHeroes());
    }

    return (
        <div className = "list-wrapper">
            {pokemonList &&
                pokemonList.length &&
                pokemonList.map((pokemon) => <p key = {pokemon.id}>
                     <span><Link to= {`/${pokemon.id}`}>{pokemon.name}</Link></span>
                      <span>{pokemon.id}</span>
                      <button>x</button>
                      
                       </p> )}
        </div>
    );
}
function mapStateToProps(state) {
    debugger
    return {
        pokemonList: state.heroReducer.pokemonList
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ }, dispatch),
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HeroList);