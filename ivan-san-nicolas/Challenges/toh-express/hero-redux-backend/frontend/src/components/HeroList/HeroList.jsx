import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestHeroes, deleteHero } from '../../redux/actions/heroActions';

function HeroList({ heroesList, dispatch }) {
    if(!heroesList && !heroesList?.length) {
        debugger;
        dispatch(requestHeroes());
    }

    console.log(`heroesList in compo: ${heroesList}`);
    return (
        <>
            {heroesList?.length ? (
            <ul>
                {
                heroesList.map((hero) => {
                    return (<li>{hero.name} 
                                <button type="button" onClick={() => deleteHero(hero.id)}>delete</button>
                            </li>)
                })
                }
            </ul>
            ) : (
                <h1>There are no heroes :/</h1>
            )
            }
        </>
    )
}

function mapStateToProps({heroesReducer}) {
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