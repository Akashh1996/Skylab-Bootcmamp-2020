import React from 'react';
import heroes from '../Store/store';
import ListItem from './ListItems';
import '../Styles/list.css'

function List() {
    return (
        <main>
			<div className="list-container">
				<div className="title-list">My Heroes</div>
				<div id="list-heroes" className="list-ranking">
                    {heroes.map((hero) => <ListItem heroID={hero.id-10} heroName={hero.name}/>)}
                </div>
			</div>
        </main>
    )
}

export default List; 