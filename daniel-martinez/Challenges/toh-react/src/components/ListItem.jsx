import React from 'react';
import './ListItem.css'

function ListItem(id, name ){
    return <li id="ul__li" ><p id="li__id">{id}</p><p id="li__hero">{name}</p></li>
}

export default ListItem;