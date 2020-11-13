import { useState } from "react";
import React from 'react';
import {connect} from 'react-redux';
import { PropTypes } from 'prop-types';
import {loadHeroes} from '../redux/actions/actions-types';

function HeroListComponents() {
    const [heroes, setHeroes] = useState(null);

    if(!heroes) setHeroes(loadHeroes());

    return(
        <>
        {heroes? (
            <div>
                <h1>Heroes List</h1>
                <span>
                    <input type='text'/>
                    <button type="button"></button>
                    {heroes.map((hero) => <span></span>)}
                </span>


            </div>
        )}
        </>
    )
}

HeroListComponents.propTypes = {
    heroes: PropTypes.shape([]).isRequired,
    actions: PropTypes.shape({
        heroesList: PropTypes.func.isRequired,
    }).isRequired
}


function mapStateToProps(state){
    return{
        heroesList: state.heroes,
    }
}

export default connect(mapStateToProps)(HeroListComponents);