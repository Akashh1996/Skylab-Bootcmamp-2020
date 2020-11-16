import React from 'react';
import heroes from '../Store/Store';
import ListItem from './ListItem';
import '../TohStyles.css';

function List() {
    return (
        <main>
            <h2 className="list-title">My Heroes</h2>
            <div className="list-heroes">
                {heroes.map((hero) => <ListItem heroId={hero.id} heroName={hero.name}/>)}
            </div>
        </main>
    )
}

export default List;