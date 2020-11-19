import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestHeroes, deleteHero, addHero, updateHero } from '../../redux/actions/heroActions';

function HeroList({ heroesList, dispatch }) {
    if(heroesList.length < 1) {
        dispatch(requestHeroes());
    }

    let newHeroName = null;

    return (
        <>
            {heroesList?.length > 0 ? (
            <>
                <input type="text" placeHolder="Add your hero!" id="addHero-input" onChange={(event) => newHeroName = event.target.value}/>
                <button onClick={() => dispatch(addHero(newHeroName))}>Add</button>
                <ul>
                    {
                    heroesList.map((hero) => {
                        return (<form>
                                    <input type="text" value={hero.name} onChange={(event) => dispatch(updateHero(event.target.value, hero.id))}></input>
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