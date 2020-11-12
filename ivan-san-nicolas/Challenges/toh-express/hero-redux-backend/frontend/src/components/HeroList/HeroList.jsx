import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestHeroes, deleteHero, addHero, updateHero } from '../../redux/actions/heroActions';

function HeroList({ heroesList, dispatch }) {
    if(!heroesList && !heroesList?.length) {
        dispatch(requestHeroes());
    }

    return (
        <>
            {heroesList?.length ? (
            <>
                <input value="" onClick={(event) => dispatch(addHero(event.target.value))}></input>
                <ul>
                    {
                    heroesList.map((hero) => {
                        return (<form>
                                    <input type="text" onClick={(event) => dispatch(updateHero(event.target.value))}>{hero.name}</input>
                                    <button type="button" onClick={() => dispatch(deleteHero(hero.id))}>delete</button>
                                </form>
                                );
                    })
                    }
                </ul>
            </>
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
        actions: bindActionCreators({requestHeroes, deleteHero, addHero, updateHero}, dispatch),
        dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);