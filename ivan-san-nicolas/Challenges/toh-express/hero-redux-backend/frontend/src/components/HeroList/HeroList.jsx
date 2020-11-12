import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestHeroes, deleteHero } from '../../redux/actions/heroActions';

function HeroList({ heroesList, dispatch }) {
    if(!heroesList && !heroesList?.length) {
        dispatch(requestHeroes());
    }

    function reallyDeleteHero(hero, id){
        debugger;
        console.log(`recieving hero: ${hero}`)
        console.log(`recieving id: ${id}`)
        return deleteHero(id);
    }

    return (
        <>
            {heroesList?.length ? (
            <ul>
                {
                heroesList.map((hero) => {
                    return (<li>{hero.name} 
                                <button type="button" onClick={() => dispatch(reallyDeleteHero(hero, hero.id))}>delete</button>
                            </li>
                            );
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
        actions: bindActionCreators({requestHeroes, deleteHero}, dispatch),
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);