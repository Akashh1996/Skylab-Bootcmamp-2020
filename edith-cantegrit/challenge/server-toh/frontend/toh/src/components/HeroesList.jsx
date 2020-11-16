import React from 'react';
import { connect } from 'react-redux';
import {
	requestLoadHeroes,
} from '../redux/actions/hero-actions';

function HeroesList({heroList, dispatch, actions}) {
    if(!heroList && heroList?.length) {
        dispatch(requestLoadHeroes())
    }
return (
    <>
        {heroList && heroList.map((hero) => {
            return <p>{hero.name}</p>
        })}
    </>
)}

function mapStateToProps({heroReducer}) {
    return {
        heroList: heroReducer.heroList
    };
}

connect()
export default connect(mapStateToProps)(HeroesList)