import React from 'react';
import './topHeroesItem.css'

function TopHeroesItem({heroes}) {
    return <li class="top-heroes-item">{heroes}</li>
}

export default TopHeroesItem;