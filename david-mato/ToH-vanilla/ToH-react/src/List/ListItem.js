import React from 'react';
import '../style.css'

function ListItem({heroID, heroName}) {
    return (
        <a class="list-heroes__buttons" href="../detail/detail.html?heroId=${hero.id}">
            <span class="list-heroes__buttons--id">{heroID}</span>
            <span class="list-heroes__buttons--name">{heroName}</span>
        </a>
    )
}

export default ListItem;