import React from 'react';
import '../TohStyles.css';


function ListItem ({heroId, heroName}) {
    return (
        <button className="list-heroes__btn" alt="heroes">
            <span className="list-heroes__btn-id">{heroId}</span>
            <span className="list-heroes__btn-name">{heroName}</span>
        </button>
    )
}

export default ListItem;