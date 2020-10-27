import React from 'react';
import './List.css'
import ListItem from './../components/ListItem';

function List(){
    const heroes = [
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
      ];
    return <section id="list">
            <h2 id="list__title">My Heroes </h2>
<ul id="list__ul">{heroes.map(hero => {
    return ListItem(hero.id, hero.name)
})}</ul>
        </section>
}

export default List;