import React from 'react';
import '../TohStyles.css';


function ListItem ({heroId, heroName}) {
    return (
        <a className="list-heroes__btn" href="../Detail/Detail.html?heroId=${hero.id}" alt="heroes">
            <span className="list-heroes__btn-id">{heroId}</span>
            <span className="list-heroes__btn-name">{heroName}</span>
        </a>
    )
}

export default ListItem;