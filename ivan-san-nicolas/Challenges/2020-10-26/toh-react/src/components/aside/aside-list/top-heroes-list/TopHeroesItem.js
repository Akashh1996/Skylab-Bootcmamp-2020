import React from 'react';
import './topHeroItem.css'

function TopHeroesItem({heroes}) {
    return <li class="top-heroes-item">{heroes.name}</li>
}

export default TopHeroesItem;