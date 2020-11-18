import React from 'react';
import './List.css';
import ListItem from './ListItem'

function List(){
    const books = [
        'The Shining',
        'The adventures of Huckleberry Finn',
        'Macbeth',
        'IT'
    ];
return <ul id="block__list">
    {books.map((title) => (<ListItem title={title} key={title}/>))}
</ul>;
}

export default List;