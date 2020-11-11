import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {requestHeroes} from '../../redux/actions/heroActions';

function HeroList(heroesList, dispatch) {
    debugger;
    if(!heroesList && !heroesList?.length) {
        dispatch(requestHeroes());
    }

    return (
        <>
            {heroesList && heroesList?.length && 
            <ul>
                {
                heroesList.map((hero) => {
                    return <li>{hero.name}</li>
                })
                }
            </ul>
                }
        </>
    )
}

function mapStateToProps({heroesReducer}) {
    debugger;
    return {
        heroesList: heroesReducer.heroesArray,
    }
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({requestHeroes}, dispatch),
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);